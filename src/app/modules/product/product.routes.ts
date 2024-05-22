import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

router.post('/', ProductController.createProduct)

router.get('/', ProductController.getAllProducts)

router.get('/:productID', ProductController.getAProduct)

router.put('/:productId', ProductController.updateAProduct)

router.delete('/:productId', ProductController.deleteAProduct)

router.get('/api/products', ProductController.searchProduct)

export const ProductRoutes = router
