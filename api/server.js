const express = require('express');
const mongoose = require('mongoose'); 
const requireDir = require('require-dir');

//definindo rota
const porta = 3001;

//iniciando o DB 

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
});


//faz require automaticamente para todos os models da pasta
requireDir('./src/models');

//iniciando o app
const app = express();

//Rotas
app.use('/api', require('./src/routes'));

app.listen(porta);

console.log('Server rodando na porta '+porta+' =D')