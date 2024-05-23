import { Request, Response } from 'express'
import { OrderServices } from './order.service'
import { ZodOrderSchema } from './order.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body.orders

    const zodParsedData = ZodOrderSchema.parse(orderData)

    const newOrder = await OrderServices.createOrderInDB(zodParsedData)

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: newOrder,
    })
  } catch (error: any) {
    let errMessage = 'An error occurred while creating the order.'

    if (error.message === 'Insufficient quantity available in inventory') {
      errMessage = error.message
    } else if (error.message === 'Product not found') {
      errMessage = error.message
    }

    res.status(500).json({
      success: false,
      message: errMessage,
    })
  }
}

// this is a order getting controller

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await OrderServices.getAllOrdersFromDB()

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: allOrders,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching the orders.',
      error: error.message,
    })
  }
}

//this controller will get order by email

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await OrderServices.getOrderByEmailFromDB(email as string)

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the orders.',
      error: error.message,
    })
  }
}

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
}
