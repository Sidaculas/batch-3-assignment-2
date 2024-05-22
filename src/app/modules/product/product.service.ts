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

// this function will update the product

const updateProductInDB = async (
  id: string,
  productData: Partial<TProduct>,
) => {
  try {
    return await ProductModel.findByIdAndUpdate(id, productData)
  } catch (error) {
    throw new Error('Failed to update product')
  }
}

// this function will delete a product from DB
const deleteProductInDB = async (
  id: string,
  productData: Partial<TProduct>,
) => {
  try {
    return await ProductModel.findByIdAndDelete(id, productData)
  } catch (error) {
    throw new Error('Failed to update product')
  }
}

// this function search the db to find match

const searchProductInDB = async (search: string) => {
  return await ProductModel.find({
    $or: [
      { name: search },
      { description: search },
      { category: search },
      { tags: search },
    ],
  })
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAProductFromDB,
  updateProductInDB,
  deleteProductInDB,
  searchProductInDB,
}
