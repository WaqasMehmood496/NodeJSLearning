const express = require('express')
const route = express.Router();
const {getProducts, singleProduct, createProduct, updateProduct, deleteProduct} = require('../Controller/product.controller')

route.get('/', getProducts)

route.get('/:id',singleProduct)

route.post('/', createProduct)

route.put('/:id', updateProduct)

route.delete('/:id', deleteProduct)

module.exports = route