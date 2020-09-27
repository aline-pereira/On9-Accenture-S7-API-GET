const express = require('express');
const app = express();
const porta = 3000;
const biografia = require('./biografias.json');

app.get('/biografias', (req, res) => {
    res.json(biografia);
});

app.use(express.json());

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})