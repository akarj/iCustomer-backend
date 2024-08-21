const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/products.controller');
const { authMiddleware } = require("../middleware/auth/auth.middleware");

productsRouter.get('/:productId', authMiddleware, productsController.getProduct);
productsRouter.get('/', authMiddleware, productsController.getAllProducts);

module.exports = productsRouter;
