const express = require('express');
const router = express.Router();
const productsController = require('../Controllers/products')

router.get("/products", productsController.list);

router.get("/products/:id", productsController.show);

router.post("/products", productsController.create);

module.exports = router;