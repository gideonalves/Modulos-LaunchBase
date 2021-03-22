const express = require('express')
const routes = express.Router() // 01 routes sera responsavel por todas as rotas
const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members')


// Rotas
routes.get('/', function(req, res) {  // 02
    // nessa rota oque muda é o "redirect"
    return res.redirect("/instructors") 
})

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit )
routes.post("/instructors", instructors.post)
routes.put("/instructors", instructors.put)
routes.delete("/instructors", instructors.delete)


// ROTAS MEMBERS
routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit )
routes.post("/members", members.post)
routes.put("/members", members.put)
routes.delete("/members", members.delete)

module.exports = routes



// HTTP VERBS
// GET: Recerber RESOURCE
//POST: Criar ou Salvar criar um novo RESOURCE com dados enviados
//PUT: Atualizar RESOURCE
//DELETE: deletar RESOURCE

// aqui o module exporta as routes