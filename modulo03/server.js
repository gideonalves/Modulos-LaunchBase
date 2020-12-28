const express = require('express')
const nunjucks = require('nunjucks') //chama o nunjucks

const server = express()
const videos = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// ====================  Rotas =========================

server.get("/", function (req, res) {
    const about = {
        avatar_url: "./img/gideon.png",
        name: "Gideon Alves",
        role: "Aluno - Rocketseat",
        description: 'Programador Full-stack, da escola <a href="https://rocketseat.com.br" target="_blank">Recketseat</a> com o melhor instrutor Mayk brito',
        links: [
            { name: "Github", url: "https://github.com/"},
            { name: "Linkedin", url: "https://www.linkedin.com/feed/"}
        ]
    }


    return res.render("about", {about})
})

server.get("/portfolio", function (req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
     })
     if (!video) {
         return res.send("Video not found!")
     }

    return res.render("video", { item: video })      
})



server.listen(5000, function() {
    console.log("server is running")
})