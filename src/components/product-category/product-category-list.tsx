import { ProductCard } from '../product-list/product-card'
import { ProductGrid } from '../product-list/product-grid'

export const ProductCategoryList = (props: any) => {
  const { products, max } = props
  return (
    <ProductGrid max={max}>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  )
}
