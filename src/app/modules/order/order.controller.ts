import { Request, Response } from 'express'
import { OrderServices } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, productId, price, quantity } = req.body
    const order = { email, productId, price, quantity }
    const newOrder = await OrderServices.createOrderInDB(order)

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: newOrder,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the order.',
      error: error.message,
    })
  }
}

export const OrderController = {
  createOrder,
}
