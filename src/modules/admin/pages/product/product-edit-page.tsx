import { Box, Flex, Heading, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react'
import { AdminLayout } from '~/layouts/admin-layout'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { ProductEditForm } from '../../forms/product/product-edit-form'
import { useCustomToast } from '~/hooks'

export const ProductEditPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/product/show/${id}`).then((res) => {
      setProduct(res.data)
      setIsLoading(false)
    }).catch((error) => {
      toastError(error.response.data.message)
      navigate('/admin/product')
    })
  }, [])

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Sửa sản phẩm
            </Heading>
          </Stack>
          {isLoading ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <ProductEditForm data={product} />
          )}
        </Stack>
      </Box>
    </AdminLayout>
  )
}
