import { Box, Flex, Heading, HStack, Link, Stack, Skeleton, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { CartItem } from '~/components/cart/cart-item'
import { CartOrderSummary } from '~/components/cart/cart-order-summary'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const CartPage = () => {
  const [cart, setCart] = useState<any>(null)
  const [totalItem, setTotalItem] = useState(0)
  const [cartUpdate, setCartUpdate] = useState(false)
  const [isLoadingCart, setIsLoadingCart] = useState(true)

  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState<number[]>([])

  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  const handleSelectAll = (e: any) => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(cart.cart_items.map((item: any) => item.id))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  const handleClick = (e: any) => {
    const { id, checked } = e.target
    setIsCheck([...isCheck, parseInt(id)])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)))
    }
  }

  useEffect(() => {
    axiosClient
      .get('client/get_my_cart')
      .then((res: any) => {
        setCart(res.data)
        setTotalItem(res.data.cart_items.length)
        setIsLoadingCart(false)
      })
      .catch((err: any) => {
        toastError(err.response.data.message)
        navigate(navigationFn.HOME)
      })
  }, [cartUpdate])

  const handleCartUpdate = () => {
    setCartUpdate(!cartUpdate)

    axiosClient
      .get('client/get_my_cart')
      .then((res: any) => {
        setCart(res.data)
        setTotalItem(res.data.cart_items.length)
        setIsLoadingCart(false)
      })
      .catch((err: any) => {
        toastError(err.response.data.message)
        navigate(navigationFn.HOME)
      })
  }

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

              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify='space-between'
                backgroundColor={'gray.200'}
                borderRadius={'md'}
                p={'4'}
              >
                <Box flex={'1'}>
                  <Checkbox
                    onChange={handleSelectAll}
                    isChecked={isCheckAll}
                    borderColor={'primary'}
                    name={'selectAll'}
                  />
                </Box>
                <Box fontWeight={'bold'} flex={'4'}>
                  Sản phẩm
                </Box>
                <Box fontWeight={'bold'} flex={'2'}>
                  Số lượng
                </Box>
                <Box fontWeight={'bold'} flex={'1'}>
                  Giá
                </Box>
                <Box fontWeight={'bold'} flex={'1'}>
                  Hoạt động
                </Box>
              </Flex>
              {cart && cart.cart_items && (
                <Stack spacing='6'>
                  {cart.cart_items.map((item: any) => (
                    <Flex key={item.id} direction='row' justifyContent={'space-between'} alignItems='center'>
                      <Box flex={'1 '} pl={'4'}>
                        <Checkbox
                          key={item.id}
                          id={item.id}
                          onChange={handleClick}
                          isChecked={isCheck.includes(item.id)}
                          value={item.id}
                        />
                      </Box>
                      <Box flex={'11'}>
                        <CartItem value={item} handleCartUpdate={handleCartUpdate} />
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              )}
            </Stack>

            <Flex direction='column' alignItems='center' flex='1'>
              <CartOrderSummary value={cart} />
              <HStack mt='6' fontWeight='semibold'>
                <Link color={'blue.500'}>Tiếp tục mua hàng</Link>
              </HStack>
            </Flex>
          </Stack>
        )}
      </Box>
    </DefaultLayout>
  )
}
