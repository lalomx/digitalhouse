const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
    // const visited = products.filter(p => p.category === "visited");
    // const inSale = products.filter(p => p.category === "in-sale");

    const visited = [];
    const inSale = [];

    products.forEach(p => {
      if (p.category === "visited") {
        visited.push(p);
      } else {
        inSale.push(p);
      }
    })


    res.render("index", { visited, inSale });
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
