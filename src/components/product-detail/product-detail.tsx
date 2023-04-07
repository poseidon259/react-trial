import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  Stack,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Rating } from '../other/rating'
import { PriceTag } from '../other/price-tag'

export const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = (size: any) => {
    if (selectedSize === size) {
      setSelectedSize(null) // deselect the button if it's already selected
    } else {
      setSelectedSize(size) // select the new button
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1)
    }
  }

  return (
    <>
      <Box textAlign='center'>
        <Text pt={'20px'} color={'primary'}>E-Commerce</Text>
        <Text fontSize={'40px'}>Product Detail</Text>
        <Text pb={'20px'} fontWeight="light">Used to display details of a product with beautiful galleries</Text>
      </Box>
      <Box p={6} m={4}>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          gap={6}
          justifyContent='center'
          alignItems='center'
        >
          <GridItem>
            <Image src='https://via.placeholder.com/800x800' alt='Product Image' w='100%' />
          </GridItem>
          <GridItem>
            <Stack>
              <Heading as='h2' fontSize='2xl' pt='10px'>
                Product Name
              </Heading>
              <HStack>
                <Rating defaultValue={4} size='sm' />
                <Text fontSize='sm' color={'gray.400'}>
                  {12} Reviews
                </Text>
              </HStack>
              <PriceTag salePrice={100} price={200} currency='VND' />
              <Text fontSize='md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt volutpat ex, id eleifend felis
                fermentum eu. In hac habitasse platea dictumst. Ut eget semper nisl. Duis auctor tortor sit amet nisl
                egestas, ac aliquet neque blandit. Nullam vitae justo a nisi facilisis tempus eu a ipsum. Sed hendrerit
                luctus nibh, non sollicitudin mauris hendrerit non. Curabitur blandit hendrerit ante sed fermentum.
              </Text>
              <FormControl id='size'>
                <FormLabel fontSize='md'>Size</FormLabel>
                <Stack direction='row' spacing={2}>
                  <Button
                    size='md'
                    variant={selectedSize === 'XS' ? 'solid' : 'outline'}
                    onClick={() => handleSizeClick('XS')}
                  >
                    XS
                  </Button>
                  <Button
                    size='md'
                    variant={selectedSize === 'S' ? 'solid' : 'outline'}
                    onClick={() => handleSizeClick('S')}
                  >
                    S
                  </Button>
                  <Button
                    size='md'
                    variant={selectedSize === 'M' ? 'solid' : 'outline'}
                    onClick={() => handleSizeClick('M')}
                  >
                    M
                  </Button>
                  <Button
                    size='md'
                    variant={selectedSize === 'L' ? 'solid' : 'outline'}
                    onClick={() => handleSizeClick('L')}
                  >
                    L
                  </Button>
                  <Button
                    size='md'
                    variant={selectedSize === 'XL' ? 'solid' : 'outline'}
                    onClick={() => handleSizeClick('XL')}
                  >
                    XL
                  </Button>
                </Stack>
              </FormControl>
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
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
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
              <Button size='lg' colorScheme='blue'>
                Add to Cart
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}
