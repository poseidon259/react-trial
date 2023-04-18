import { Box, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { cartData } from '~/components/cart/_data'
import { CartItem } from '~/components/cart/cart-item'
import { CartOrderSummary } from '~/components/cart/cart-order-summary'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

export const CartPage = () => {
  const [cart, setCart] = useState<any>(null)
  const [totalItem, setTotalItem] = useState(0)
  const [isLoadingCart, setIsLoadingCart] = useState(true)

  useEffect(() => {
    axiosClient.get('client/get_my_cart').then((res: any) => {
      setCart(res.data)
      setTotalItem(res.data.cart_items.length)
      setIsLoadingCart(false)
    })
  }, [])

  return (
    <DefaultLayout>
      <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx='auto'
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        {isLoadingCart ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
          >
            <Stack spacing={{ base: '8', md: '10' }} flex='2'>
              <Heading fontSize='2xl' fontWeight='extrabold'>
                Giỏ hàng ({totalItem} sản phẩm)
              </Heading>

              {cart && cart.cart_items && (
                <Stack spacing='6'>
                  {cart.cart_items.map((item: any) => (
                    <CartItem key={item.id} value={item} />
                  ))}
                </Stack>
              )}
            </Stack>

            {/* <Flex direction='column' alignItems='center' flex='1'>
              <CartOrderSummary />
              <HStack mt='6' fontWeight='semibold'>
                <p>or</p>
                <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
              </HStack>
            </Flex> */}
          </Stack>
        )}
      </Box>
    </DefaultLayout>
  )
}
