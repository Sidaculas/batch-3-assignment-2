import { TProduct } from './product.interface'
import { ProductModel } from './product.model'

//function that will create a new product in DB
const createProductIntoDB = async (product: TProduct) => {
  // creating a product using product model.
  const newProduct = ProductModel.create(product)

  return newProduct
}

//this function will get all products from the db
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find()

  return result
}

// this function will find a product based on id

const getAProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id })

  return result
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAProductFromDB,
}
