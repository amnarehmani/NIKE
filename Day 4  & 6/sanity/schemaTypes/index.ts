import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categoryType'
import { saleSchema } from './saleType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , categorySchema , saleSchema],
}
