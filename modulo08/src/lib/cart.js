const { formatPrice } = require('./utils')
// carrinho fica guardado na sessão (req.session)

const Cart = {
    init(oldCard) {
        if(oldCard) { // oldCard = carrinho velho
            this.items = oldCard.items
            this.total = oldCard.total
        } else {
            this.items = []
            this.total = {
                quantity: 0,
                price: 0,
                formattedPrice: formatPrice(0)
            }
        }
        return this
    },
    addOne(product) {// adicina o produto ao carrinho
        // ver se o produto já existe no carrinho
        let inCard = this.getCardItem(product.id)
        // let inCard = this.getCardItem(productId)


        // se não existe
        if (!inCard) {
            inCard = {
                product: {
                    ...product,
                    formattedPrice: formatPrice(product.price)
                },
                    quantity: 0,
                    price: 0,
                    formattedPrice: formatPrice(0)
            }

            this.items.push(inCard)
        }

        // exedeu a quantidade maxima
        if(inCard.quantity >= product.quantity) return this

        // updade item
        inCard.quantity++
        inCard.price = inCard.product.price * inCard.quantity
        inCard.formattedPrice = formatPrice(inCard.price)

        // updade cart
        this.total.quantity++
        this.total.price += inCard.product.price
        this.total.formattedPrice = formatPrice(this.total.price)

        return this
    },

    removeOne(productId) {
       // pegar o item do carrinho
       const inCard = this.getCardItem(productId)
       
       if(!inCard) return this

       // atualizar o item
       inCard.quantity--
       inCard.price = inCard.product.price * inCard.quantity
       inCard.formattedPrice = formatPrice(inCard.price)

       // atualizar o carrinho
       this.total.quantity--
       this.total.price -= inCard.product.price
       this.total.formattedPrice = formatPrice(this.total.price)

       if(inCard.quantity < 1) {
           this.items = this.items.filter(item => 
              item.product.id != inCard.product.id)
           return this
       }
       return this

    },

    delete(productId) {
        const inCard = this.getCardItem(productId)
        if(!inCard) return this

        if(this.items.length > 0) {
            this.total.quantity -= inCard.quantity
            this.total.price -= (inCard.product.price * inCard.quantity)
            this.total.formattedPrice = formatPrice(this.total.price)
        }

        this.items = this.items.filter(item => inCard.product.id != item.product.id)
        return this
    },

    getCardItem(productId) {
         return this.items.find(item => item.product.id == productId)
    }

}

module.exports = Cart



