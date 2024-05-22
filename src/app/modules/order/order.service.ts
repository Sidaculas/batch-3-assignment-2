import { TOrder } from './order.interface'
import { OrderModel } from './order.model'

const createOrderInDB = async (order: TOrder) => {
  const newOrder = OrderModel.create(order)
  return newOrder
}

export const OrderServices = {
  createOrderInDB,
}
