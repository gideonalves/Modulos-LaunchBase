const express = require('express')
const routes = express.Router() // 01 routes sera responsavel por todas as rotas
const instructors = require('./instructors')

// Rotas
routes.get('/', function(req, res) {  // 02
    // nessa rota oque muda é o "redirect"
    return res.redirect("/instructors") 
})

routes.get('/instructors', instructors.index)

routes.get('/instructors/create', function(req, res) {  
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', instructors.edit )

routes.post("/instructors", instructors.post)

routes.put("/instructors", instructors.put)

routes.delete("/instructors", instructors.delete)



routes.get('/members', function(req, res) {  
    return res.send("members")
})

// HTTP VERBS
// GET: Recerber RESOURCE
//POST: Criar ou Salvar criar um novo RESOURCE com dados enviados
//PUT: Atualizar RESOURCE
//DELETE: deletar RESOURCE

// aqui o module exporta as routes
module.exports = routes