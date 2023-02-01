const express = require('express')
const app = express()
const port = 3000


const tarefa = require('./controller/tarefa-controller')
tarefa(app)

const usuario = require('./controller/usuario-controller')
usuario(app)



app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})