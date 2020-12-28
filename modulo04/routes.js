const express = require('express')
const routes = express.Router() // 01 routes sera responsavel por todas as rotas
const instructors = require('./instructors')

// Rotas
routes.get('/', function(req, res) {  // 02
    // nessa rota oque muda é o "redirect"
    return res.redirect("/instructors") 
})

routes.get('/instructors', function(req, res) {  
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {  
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.post("/instructors", instructors.post)

routes.get('/members', function(req, res) {  
    return res.send("members")
})

// aqui o module exporta as routes
module.exports = routes