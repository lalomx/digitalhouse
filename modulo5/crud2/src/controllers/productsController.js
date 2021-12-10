const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail', {
			product,
			toThousand
		})
    // res.status(500).send("error")
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
    // {
    //   "id": 17,
    //   "name": "Xbox One",
    //   "price": "13000",
    //   "discount": "0",
    //   "category": "in-sale",
    //   "description": "un xbox",
    //   "image": "default-image.png"
    //  }
    const { body } = req;

    // guard clauses
    if (body.name === "") {
      res.send("name vacio")
      return
    }

    // express para hacer validaciones
    // hapi.js

		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: req.file.filename
		};

    // const p = Object.assign({
    //   id: products[products.length - 1].id + 1,
		// 	image: 'default-image.png'
    // }, req.body)
    // {
    // id: 16
    // image: 'default-image'
    // category: req.body.category
    // description:'un xbox'
    // discount:'0'
    // name:'Xbox One'
    // price:'13000'
    // }
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		return res.redirect('/products/detail/' + newProduct.id);
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};

    // const nuevoArray = []
    // for (const p of products) {
    //  p.name = lalo
    // }

    // nuevoArray
		
		let newProducts = products.map(p => {
			if (p.id == productToEdit.id) {
        // const n = {}
        // n.id = productToEdit.id
        // otras propiedades
        console.log(products)
				return p = {...productToEdit};
			}
			return p;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
    products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products');
	}
};

module.exports = controller;