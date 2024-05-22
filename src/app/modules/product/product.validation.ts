import { z } from 'zod'

const VariantSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1),
})

const InventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
})

export const ZodProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string().min(1)).nonempty('Tags array cannot be empty'),
  variants: z.array(VariantSchema).nonempty(),
  inventory: InventorySchema,
})
