const express = require("express") 
  
  function tarefa(app) {
    console.log("Eu sou uma tarefa")

    app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com GET e recurso tarefas: título, data, status e descrição devem ser retornados')
      })
}

module.exports = tarefa