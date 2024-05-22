import { NextFunction, Request, response } from 'express'
import { AnyZodObject, Schema, z, ZodError } from 'zod'

export const createOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
})
