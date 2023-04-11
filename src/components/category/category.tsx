import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'
import { CategoryCarousel } from './category-carousel'

export const Category = (props: any) => {
  const { categories } = props
  const navigate = useNavigate()

  return (
    <Box>
      <Text fontSize='xl' fontWeight='bold' mb={4}>
        Danh mục
      </Text>
      <CategoryCarousel elements={ categories } />
    </Box>
  )
}
