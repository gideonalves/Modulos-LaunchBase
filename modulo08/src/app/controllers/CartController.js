const Cart = require('../../lib/cart')

const LoadProductService = require('../services/LoadProductService')

module.exports = {
    async index(req, res) {
        try {
            let { cart } = req.session

            cart = Cart.init(cart)

            return res.render('cart/index', { cart })
        } catch (error) {
            console.error(error)
        }
    },
    async addOne(req, res) {
        try {
            const { id } = req.params

            const product = await LoadProductService.load('product', { where: { id }})
    
            let { cart } = req.session
    
            cart = Cart.init(cart).addOne(product)
    
            req.session.cart = cart
    
            return res.redirect('/cart')
        } catch (error) {
            console.error(error)
        }
    },
    removeOne(req, res) {
        try {
            let { id } = req.params 

            let { cart } = req.session
    
            if(!cart) return res.redirect('/cart')
    
            cart = Cart.init(cart).removeOne(id)
    
            req.session.cart = cart

            return res.redirect('/cart')
        } catch (error) {
            console.error(error)
        }
    },
    delete(req, res) {
        let { id } = req.params
        let { cart } = req.session

        if(!cart) return

        req.session.cart = Cart.init(cart).delete(id)

        return res.redirect('/cart') 
    }
}





// const { addOne } = require('../../lib/cart');
// const Cart = require('../../lib/cart');

// const LoadProductsService = require('../services/LoadProductSevice')

// module.exports = {
//   async index(req, res) {
//     try {

//         let { cart } = req.session

//         // gerenciador de carrinho
//         cart = Cart.init(cart)

//         return res.render('cart/index', { cart })

//     } catch (error) {
//         console.error(error);
//     }
//   },

//   async addOne(req, res) {
//         // pegar o id do produto e o produto
//         const { id } = req.params

//         const product = await LoadProductsService.load('product', {where: { id } })

//         // pegar o carrinho da sesão
//         let { cart } = req.session

//         // adicionar o produto ao carrinho (usando nosso gerenciador de carrinho)
//         cart = Cart.init(cart).addOne(product)

//         // atualizar o carrinho da sessão
//         req.session.Cart = cart

//         // redirecionar o usuário para a tela do carrinho
//         return res.redirect('/cart')
//   },

//   removeOne(req, res) {
//       // pegar o id do produto
//       let { id } = req.params

//       // pegar o carrinho da sessão
//       let { cart } = req.session

//       // se não tiver carrinho, retornar 
//       if (!cart) return res.redirect('/cart')

//       // iniciar o carrinho (gerenciador de carrinho) e remover
//       cart = Cart.init(cart).removeOne(id)

//       // atualizar o carrinho da sessão, removendo 1 item
//       res.session.cart = cart

//       // redirecionamento para a parina cart
//       return res.redirect('/cart')

//   },

//   delete(req, res) {
//     let { id } = req.params
//     let { cart } = req.session

//     if(!cart) return

//     req.session.cart = Cart.init(cart).delete(id)

//     return res.redirect('/cart')
//   }

// };

