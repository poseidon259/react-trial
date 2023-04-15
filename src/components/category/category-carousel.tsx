import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const CategoryCarousel = (props: any) => {
  const navigate = useNavigate()
  const { elements } = props

  const handleToProductCategoryPage = (id: any) => {
    navigate(`/category/${id}/products`)
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000
  }
  return (
    <>
      <Slider {...settings}>
        {elements.map((element: any) => (
          <Box
            key={element.id}
            bg='white'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='relative'
            transition='transform 0.3s ease-in-out'
            _hover={{ transform: 'scale(1.1)' }}
            cursor='pointer'
          >
            <Text
              mt={4}
              fontWeight='light'
              fontSize='md'
              textAlign={'center'}
              onClick={() => handleToProductCategoryPage(element.id)}
            >
              {element.name}
            </Text>
            <Flex justifyContent='center' alignItems='center' height='100%'>
              <Image src={element.image} objectFit='cover' w='150px' h='150px' />
            </Flex>
          </Box>
        ))}
      </Slider>
    </>
  )
}
