const express = require('express');
const Router = express.Router();
const productsController = require('../controllers/productsController')
const upload = require('../config/diskStorage')
Router.post('/add', upload.array('images', 12), productsController.add);
Router.get('/', productsController.index)

module.exports = Router;
