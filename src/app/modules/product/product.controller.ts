import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import { ZodProductSchema } from './product.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    // could have call product model here and created a product.
    // rather made another file named product.service.ts to maintain reusability
    // console.log(req.body)
    const productData = req.body.products

    const zodParsedData = ZodProductSchema.parse(productData)

    const saveProduct = await ProductServices.createProductIntoDB(zodParsedData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: saveProduct,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the product.',
      error: error.message,
    })
  }
}

// getting all products from db
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await ProductServices.getAllProductsFromDB()

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: allProducts,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the product.',
      error: error.message,
    })
  }
}

// getting a product form the db
const getAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const result = await ProductServices.getAProductFromDB(productId)

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching the product.',
      error: error.message,
    })
  }
}

// update product by id

const updateAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const productData = req.body.products
    const updateProduct = await ProductServices.updateProductInDB(
      productId,
      productData,
    )

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updateProduct,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the product.',
      error: error.message,
    })
  }
}

// deleting a product by id
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const productData = req.body.products
    const updateProduct = await ProductServices.deleteProductInDB(
      productId,
      productData,
    )

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: updateProduct,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the product.',
      error: error.message,
    })
  }
}

// searching a product

const searchProduct = async (req: Request, res: Response) => {
  try {
    // should not put any. rather check if the term if it is string or not.

    const { search }: any = req.query
    const result = await ProductServices.searchProductInDB(search)

    res.status(500).json({
      success: true,
      message: `Products matching search term ${search} fetched successfully!`,
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while searching the product.',
      error: error.message,
    })
  }
}

export const ProductController = {
  createProduct,
  getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
  searchProduct,
}
