const fs = require('fs')
const data = require('./data.json')

// show = mostra
exports.show = function(req,res) {
    //req.params
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor) {
        // o find espera um retorno falso ou verdadeiro
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("instrucutor not found!")

    return res.send(foundInstructor)
}



// create = criar
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    let { avatar_url, birth, name, services, gender } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)


    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file erro!")

        return res.redirect("/instructors") //aqui a pagina volta para instructors

    })

    return res.send(req.body)
}
