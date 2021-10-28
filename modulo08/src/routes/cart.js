const express = require('express')
const routes = express.Router() 

const CartController = require('../app/controllers/CartController')

routes.get('/', CartController.index)
     .post('/:id/add-one', CartController.addOne) // adicona um produto ao carrinho
    .post('/:id/remove-one', CartController.removeOne) // remove um produto ao carrinho
    .post('/:id/delete', CartController.delete) // remove um produto ao carrinho

module.exports = routes
