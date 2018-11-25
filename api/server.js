const express = require('express');

const porta = 3001;

const app = express();

//configurando rota raíz 

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(porta);

console.log('Server rodando na porta '+porta+' =D')