import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text
} from '@chakra-ui/react'

import { Rating } from '../other/rating'
import { PriceTag } from '../other/price-tag'
import { ProductImageSlider } from '../slick/product-images-slider'
import { useState } from 'react'

export const ProductDetail = (props: any) => {
  const { quantityCallback, quantity, product } = props
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

  const [selectedButtons, setSelectedButtons] = useState<{ [key: string]: string }>({})

  function handleMasterFieldclick(fieldId: any, childId: any) {
    setSelectedButtons((prevState) => {
      // Create a copy of the previous state
      const newState: any = { ...prevState }

      // Check if the selected button for the current field is already set to `childId`
      if (newState[fieldId] === childId) {
        // If it is, delete the selected button by setting it to `null`
        newState[fieldId] = null
      } else {
        // Otherwise, set the selected button for the current field
        newState[fieldId] = childId
      }

      return newState
    })
  }

  return (
    <>
      <Flex gap={12} justifyContent={'center'}>
        <Box maxW={'50%'} mx={'auto'} flex={1}>
          <ProductImageSlider images={product.product_images} />
        </Box>
        <Box maxW={'50%'} flex={1}>
          <Stack>
            <Heading as='h2' fontSize='2xl' pt='10px'>
              {product.name}
            </Heading>
            <HStack>
              <Rating defaultValue={4} size='sm' />
              <Text fontSize='sm' color={'gray.400'}>
                {12} Reviews
              </Text>
            </HStack>
            <PriceTag salePrice={100} price={200} currency='VND' />
            <Text fontSize='md'>{product.description_detail}</Text>
            {product.master_fields.map((field: any) => (
              <FormControl id={field.id} key={field.id}>
                <FormLabel fontSize='md'>{field.name}</FormLabel>
                <Stack direction='row' spacing={2}>
                  {field.childs.map((child: any) => (
                    <Button
                      key={child.id}
                      size='md'
                      // variant={masterFieldChild === child.id && masterField === field.id ? 'solid' : 'outline'}
                      variant={selectedButtons[field.id] === child.id ? 'solid' : 'outline'}
                      onClick={() => handleMasterFieldclick(field.id, child.id)}
                    >
                      {child.name}
                    </Button>
                  ))}
                </Stack>
              </FormControl>
            ))}
            <FormControl id='quantity'>
              <FormLabel fontSize='md'>Quantity</FormLabel>
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
              <Button size='lg' color='white' backgroundColor={'primary'}  w={'full'}>
                Add to Cart
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}
