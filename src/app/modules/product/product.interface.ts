export interface Variant {
  type: string
  value: string
}

export interface Inventory {
  quantity: number
  instock: boolean
}

export interface TProduct {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: Variant[]
  inventory: Inventory
}
