import express from 'express'
import { getProductbyId, getProducts } from '../controllers/productController.js'

const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
//@access public
router.get('/', getProducts)

// @desc Fetch single product by id
// @route GET /api/products/:id
//@access public
router.get('/:id', getProductbyId)

export default router