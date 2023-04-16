import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text
} from '@chakra-ui/react'

import { Rating } from '../other/rating'
import { PriceTag } from '../other/price-tag'
import { ProductImageSlider } from './product-images-slider'
import { MasterField } from './master-field'

export const ProductDetail = (props: any) => {
  const { quantityCallback, quantity, product, masterFieldCallback, masterField } = props
  const handleIncreaseQuantity = () => {
    quantityCallback((quantity: number) => quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      quantityCallback((quantity: number) => quantity - 1)
    }
  }

  const handleChangeQuantity = (quantity: any) => {
    quantityCallback(quantity)
  }

  return (
    <>
      <Flex gap={12} justifyContent={'center'} minH={'600px'}>
        <Box maxW={'50%'} mx={'auto'} flex={1}>
          <ProductImageSlider images={product.product_images} />
        </Box>
        <Box maxW={'50%'} flex={1}>
          <Stack>
            <Heading as='h2' fontSize='2xl' pt='10px'>
              {product.name}
            </Heading>
            <HStack>
              <Rating defaultValue={product.avg_rating ?? 0} size='sm' />
              <Text fontSize='sm' color={'gray.400'}>
                {product.comments_count} Reviews
              </Text>
            </HStack>
            {masterField ? (
              <PriceTag salePrice={product.child_sale_price} price={product.child_origin_price} currency='VND' />
              ) : (
              <PriceTag salePrice={product.sale_price} price={product.origin_price} currency='VND' />
            )}
            <Text fontSize='md' fontWeight={'light'}>
              {product.description_detail}
            </Text>
            <MasterField product={product} masterFieldCallback={masterFieldCallback} masterField={masterField} />
            <FormControl id='quantity'>
              <FormLabel fontSize='md'>Số lượng</FormLabel>
              <InputGroup size='md'>
                <Button
                  onClick={handleDecreaseQuantity}
                  isDisabled={quantity === 1}
                  bg='gray.200'
                  color='black'
                  size='md'
                  fontWeight='bold'
                >
                  -
                </Button>
                <Input
                  type='number'
                  value={quantity}
                  min={1}
                  onChange={(e) => handleChangeQuantity(parseInt(e.target.value) || 1)}
                  textAlign='center'
                  border='1px'
                  borderColor='gray.300'
                  fontWeight='bold'
                  w='100px'
                  px={{ base: '2', md: '4' }}
                  mx={{ base: '2', md: '2' }}
                />
                <Button size='md' onClick={handleIncreaseQuantity} bg='gray.200' color='black' fontWeight='bold'>
                  +
                </Button>
              </InputGroup>
            </FormControl>
            <Box w={'full'} pt={'30px'}>
              <Button size='lg' color='white' backgroundColor={'primary'} w={'full'}>
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}
