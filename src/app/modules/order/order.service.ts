import { ProductModel } from '../product/product.model'
import { TOrder } from './order.interface'
import { OrderModel } from './order.model'

const createOrderInDB = async (order: TOrder) => {
  // handling errors of bonus section
  const item = await ProductModel.findById(order.productId)

  if (!item) {
    throw new Error('Product not found')
  }

  // checking the quantity
  if (order.quantity > item.inventory.quantity) {
    throw new Error('Insufficient quantity available in inventory')
  }

  const newOrder = await OrderModel.create(order)

  //updating after every valid order
  item.inventory.quantity -= order.quantity
  item.inventory.inStock = item.inventory.quantity > 0
  await item.save()

  return newOrder
}

// this function will get all the orders

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find()
  return result
}

// this function will find orders by email
const getOrderByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email })
  return result
}

export const OrderServices = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
}
