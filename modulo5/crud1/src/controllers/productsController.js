const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
    res.render("products", { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
    const id = req.params.id
    const product = products.find(p => p.id == id)

    const { discount, price } = product;

    const finalPrice = discount / 100 * price;

    product.finalPrice = finalPrice;

    res.render("detail", { product })
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
    res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
    const newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: req.file.filename
    }

    products.push(newProduct)

    // express validator

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))


    res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
    const id = req.params.id
    const product = products.find(p => p.id == id)
    res.render("product-edit-form", { product })
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
    const id = req.params.id
    const idx = products.findIndex(p => p.id == id)
    // TODO EN JS ES REFERENCIA

    /// lodash library JS
    /// .pickBy

    products[idx] = {
      id,
      ...req.body,
      image: products[idx].image
    }

    // const newArrar = [...products]

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
    res.redirect("/products/detail/" + id) // res.render()
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
    const id = req.params.id
    const idx = products.findIndex(p => p.id == id)

    products.splice(idx, 1)

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
    res.redirect("/products") // res.render()
	}
};

module.exports = controller;