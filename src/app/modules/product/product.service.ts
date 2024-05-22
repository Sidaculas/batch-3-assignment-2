import { TProduct } from './product.interface'
import { ProductModel } from './product.model'

//function that will create a new product in DB
const createProductIntoDB = async (product: TProduct) => {
  // creating a product using product model.
  const newProduct = ProductModel.create(product)

  return newProduct
}

export const ProductServices = {
  createProductIntoDB,
}
