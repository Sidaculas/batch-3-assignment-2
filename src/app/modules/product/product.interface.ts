interface Variant {
  type: string
  value: string
}

interface Inventory {
  quantity: number
  instock: boolean
}

export interface Product {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: Variant[]
  inventory: Inventory
}