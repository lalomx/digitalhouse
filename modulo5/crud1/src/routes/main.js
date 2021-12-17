// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', (req, res) => res.send("hello, world!"))

// AGREGA AQUI LAS Rutas

// router.???('/', mainController.index); 
// router.???('/search', mainController.search); 

module.exports = router;
