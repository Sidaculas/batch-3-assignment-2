import { Request, Response } from 'express'
import { ProductServices } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    // could have call product model here and created a product.
    // rather made another file named product.service.ts to maintain reusability
    // console.log(req.body)
    const productData = req.body.products
    const saveProduct = await ProductServices.createProductIntoDB(productData)

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

export const ProductController = {
  createProduct,
}
