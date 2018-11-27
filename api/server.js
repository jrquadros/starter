const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const requireDir = require('require-dir');

//definindo rota
const porta = 3001;

//iniciando o app
const app = express();

//permite usar json para inserir dados
app.use(express.json());

//permite que outros domínios acessem a api
app.use(cors(/*Adicionar configurações de segurança
    ou outros domínios
    
    (aberto para todos os domínios)*/));

//iniciando o DB 

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
});


//faz require automaticamente para todos os models da pasta
requireDir('./src/models');



//Rotas
app.use('/api', require('./src/routes'));

app.listen(porta);

console.log('Server rodando na porta '+porta+' =D');