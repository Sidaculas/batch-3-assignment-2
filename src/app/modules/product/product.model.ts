import { model, Schema } from 'mongoose'
import { Inventory, TProduct, Variant } from './product.interface'

const VariantSchema: Schema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const InventorySchema: Schema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  instock: { type: Boolean, required: true },
})

const ProductSchema: Schema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
})

export const ProductModel = model<TProduct>('Product', ProductSchema)
