import express from 'express'
import { OrderController } from './order.controller'
import validation from './order.middleware'
import { createOrderSchema } from './order.validation'

const router = express.Router()

router.post('/', validation(createOrderSchema), OrderController.createOrder)

export const OrderRoutes = router
