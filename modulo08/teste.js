const { formatPrice } = require('./src/lib/utils')
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
        let inCard = this.items.find(item => item.product.id == product.id)

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

    removeOne(productId){productId},
    delete(productId){productId}
}

const product = {
    id: 1,
    price: 199,
    quantity: 2
}

const product2 = {
    id: 2,
    price: 299,
    quantity: 1
}


console.log('add first cart item');
let oldCard = Cart.init().addOne(product)
console.log(oldCard);

console.log('add second cart item');
oldCard = Cart.init(oldCard).addOne(product)
console.log(oldCard );

console.log('add third cart item');
oldCard = Cart.init(oldCard).addOne(product2)
console.log(oldCard );

console.log('add last cart item');
oldCard = Cart.init(oldCard).addOne(product)
console.log(oldCard );


module.exports = Cart



