async function post(req, res, next) {
      // Logica de Salvar
      // essa parte verifica se o formulario ta vazio
      const keys = Object.keys(req.body)

      for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, volte e preencha todos os campos.')
        }
      }

      // Verifica se tem imagem
      if (!req.files || req.files.length == 0)
         return res.send('Por favor envie pelo menos uma imagem')

      next()   
}

async function put(req, res, next) {
    // essa parte verifica se o formulario ta vazio
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "" && key != "removed_files") {
        return res.send('Por favor, volte e preencha todos os campos.')
      }
    }

    next()   
}

module.exports = {
    post,
    put
}