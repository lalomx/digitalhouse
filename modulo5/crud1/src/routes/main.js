// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// AGREGA AQUI LAS Rutas

router.get('/', mainController.index); 
// router.???('/search', mainController.search); 

module.exports = router;
