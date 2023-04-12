import { Box, Text } from '@chakra-ui/react'
import { ProductCard } from './product-card'
import { ProductGrid } from './product-grid'

export const ProductList = (props: any) => {
  const { products, max } = props
  return (
    <Box maxW='7xl' py={{ base: '6', md: '8', lg: '12' }}>
      <Text fontSize='xl' fontWeight='bold'>
        Sản phẩm
      </Text>
      <ProductGrid max={max}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  )
}
