import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { navigationFn } from '~/routes'

export const Category = (props: any) => {
  const { categories } = props
  const navigate = useNavigate()

  const handleToProductCategoryPage = (id: any) => {
    navigate(`/category/${id}/products`)
  }

  return (
    <Box>
      <Text fontSize='xl' fontWeight='bold' mb={4}>
        Danh mục
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }}>
        {categories.map((category: any) => (
          <Box
            key={category.id}
            bg='white'
            display='flex'
            flexDirection='column'
            alignItems='center'
            position='relative'
            transition='transform 0.3s ease-in-out'
            _hover={{ transform: 'scale(1.1)' }}
            cursor='pointer'
            onClick={ () => handleToProductCategoryPage(category.id) }
          >
            <Text mt={4} fontWeight='light' fontSize='md'>
              {category.name}
            </Text>
            <Image src={category.image} objectFit='cover' w='150px' h='150px' />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
