const express = require('express');
const mongoose = require('mongoose'); 

//definindo rota
const porta = 3001;

//iniciando o DB 

mongoose.connect('mongodb://JrQuadros:batmanDARKSIDE99@ds044587.mlab.com:44587/starter-api', {
    useNewUrlParser: true,
});

if(mongoose.connect){
    console.log('BD conectado');
}else{
    console.log('erro ao conectar o BD')
}




//iniciando o app
const app = express();

//configurando rota raíz 

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(porta);

console.log('Server rodando na porta '+porta+' =D')