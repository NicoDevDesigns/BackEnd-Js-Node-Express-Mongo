import express from 'express'

const routerProducts = express.Router()

import { getAllProducts, getAllProductsStatic } from '../controllers/productsControllers.js'

routerProducts.route('/').get(getAllProducts)
routerProducts.route('/static').get(getAllProductsStatic)

export default routerProducts