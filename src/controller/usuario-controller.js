const express = require("express") 
 
 function usuario(app) {
    console.log("Eu sou um usuario")

    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuário:nome, email e senha devem ser retornados')
      })
}

module.exports = usuario