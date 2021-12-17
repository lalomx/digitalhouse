const express = require('express');
const main = express.Router();

const authenticate = require('../middlewares/authenticate.js');

main.get('/', (req,res) => {
    res.send('hola mundo');
})

main.get('/admin', authenticate, (req,res) => {
    res.send(`Hola Admin ${req.user}`);
})

module.exports = main;
