const express = require('express');
const mongoose = require('mongoose'); 
const requireDir = require('require-dir');

//definindo rota
const porta = 3001;

//iniciando o DB 

mongoose.connect('mongodb://JrQuadros:batmanDARKSIDE99@ds044587.mlab.com:44587/starter-api', {
    useNewUrlParser: true,
});

if(mongoose.connect){
    console.log('BD conectado');
}else{
    console.log('erro ao conectar o BD');
}

//faz require automaticamente para todos os models da pasta
requireDir('./src/models');

//testando incerção no banco de dados
const Product = mongoose.model('Product');


//iniciando o app
const app = express();

//configurando rota raíz 

app.get('/', (req, res) => {

    Product.create({
        title: 'React Native',
        description: 'Build native app with React',
        url:'http://github.com/facebook/react-native',
    });
    
    return res.send('Hello World');
});


app.listen(porta);

console.log('Server rodando na porta '+porta+' =D')