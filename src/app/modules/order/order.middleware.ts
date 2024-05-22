import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const validation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error: any) {
      throw new Error('Validation error')
    }
  }

export default validation
