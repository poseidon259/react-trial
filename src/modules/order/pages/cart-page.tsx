import { Box, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import { cartData } from '~/components/cart/_data'
import { CartItem } from '~/components/cart/cart-item'
import { CartOrderSummary } from '~/components/cart/cart-order-summary'
import { DefaultLayout } from '~/layouts'

export const CartPage = () => {
  return (
    <DefaultLayout>
      <Box
        maxW={{ base: '3xl', lg: '7xl' }}
        mx='auto'
        px={{ base: '4', md: '8', lg: '12' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} spacing={{ base: '8', md: '16' }}>
          <Stack spacing={{ base: '8', md: '10' }} flex='2'>
            <Heading fontSize='2xl' fontWeight='extrabold'>
              Shopping Cart ({'var'} items)
            </Heading>

            <Stack spacing='6'>
              {cartData.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction='column' alignItems='center' flex='1'>
            <CartOrderSummary />
            <HStack mt='6' fontWeight='semibold'>
              <p>or</p>
              <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </DefaultLayout>
  )
}
