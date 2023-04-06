import { Box, Text } from '@chakra-ui/react'
import { ProductCard } from './product-card'
import { products } from './_data'
import { ProductGrid } from './product-grid'

export const ProductList = () => (
  <Box maxW='7xl' py={{ base: '6', md: '8', lg: '12' }}>
    <Text fontSize='xl' fontWeight='bold'>
      Sản phẩm
    </Text>
    <ProductGrid>
      {products.map((product: any) => (
        <ProductCard key={product.id}  />
      ))}
    </ProductGrid>
  </Box>
)