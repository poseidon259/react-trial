import { Box, Flex, Heading, Skeleton, Stack, useColorModeValue } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router"
import { useCustomToast } from "~/hooks"
import { AdminLayout } from "~/layouts/admin-layout"
import { useEffect, useState } from 'react'
import axiosClient from "~/libs/axios/axiosClient"
import { OrderViewForm } from "../../forms/order/order-view-form"

export const OrderViewPage = () => {
  const { id } = useParams()
  const [order, setOrder] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  useEffect(() => {
    axiosClient
      .get(`order/show/${id}`)
      .then((res) => {
        setOrder(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        toastError(error.response.data.message)
        navigate('/admin/order')
      })
  }, [])

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Xem đơn hàng
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <OrderViewForm data={order} />
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
