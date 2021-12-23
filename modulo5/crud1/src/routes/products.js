// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/products'))
  },
  filename: function (req, file, cb) {
    // nombre.extension
    // TODO: nombre-FECHA.extension
    // xbox.jpeg
    const nombre = file.originalname
    let idx = -1
    for (let i = nombre.length - 1; i >= 0; i--) {
      const char = nombre[i]
      if (char === '.') {
        idx = i
        break;
      }
    }

    const name = nombre.slice(0, idx)
    const ext = file.mimetype.split['/']

    // cb(null, `${name}-${Date.now()}.${ext}`)
    cb(null, file.fieldname + '-' + Date.now())
  }
}) 

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// /products
// AGREGA AQUI LAS Rutas de products

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 

const upload = multer({ storage })
router.post('/', upload.single('image'), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
