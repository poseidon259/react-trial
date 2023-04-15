import { Box, Center, useColorModeValue, Text, Stack, HStack, ButtonGroup, Button, Icon } from '@chakra-ui/react'
import { Rating } from '../other/rating'
import { PriceTag } from '../other/price-tag'
import { useState } from 'react'
import { BsFillCartPlusFill, BsFillEyeFill, BsFillHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router'

export const ProductCard = (props: any) => {
  const navigate = useNavigate()
  const { product } = props
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const viewProductDetail = (id: any) => {
    navigate(`/product/${id}`)
  }

  return (
    <Center>
      <Box role={'group'} p={4} w={'full'} bg={useColorModeValue('white', 'gray.800')} rounded={'lg'} zIndex={1}>
        <Box
          rounded={'lg'}
          pos={'relative'}
          height={'300px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.product_images[0].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          cursor={'pointer'}
        >
          {isHovered && (
            <Box
              position='absolute'
              top='90%'
              left='50%'
              transform='translate(-50%, -50%)'
              textAlign='center'
              opacity={isHovered ? 1 : 0}
              transition='opacity .8s ease-in-out'
              zIndex={2}
            >
              <ButtonGroup backgroundColor={'white'} px={{ base: '4', md: '4' }} py={'2px'} borderRadius={'md'}>
                <Button backgroundColor={'transparent'} _hover={{ color: 'blue.400' }}>
                  <Icon as={BsFillCartPlusFill} />
                </Button>
                <Button
                  backgroundColor={'transparent'}
                  _hover={{ color: 'blue.400' }}
                  onClick={() => viewProductDetail(product.id)}
                >
                  <Icon as={BsFillEyeFill} />
                </Button>
                <Button backgroundColor={'transparent'} _hover={{ color: 'blue.400' }}>
                  <Icon as={BsFillHeartFill} />
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </Box>

        <Stack pt={4} align={'left'}>
          <Text color={'gray.500'} fontSize={'sm'} mb='0' pt='15px'>
            {product.name}
          </Text>
          <HStack>
            <Rating defaultValue={product.avg_rating ?? 0} size='sm' />
            <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
              {product.comments_count} Reviews
            </Text>
          </HStack>
          <PriceTag price={product.origin_price} salePrice={product.sale_price} currency='VND' />
        </Stack>
      </Box>
    </Center>
  )
}
