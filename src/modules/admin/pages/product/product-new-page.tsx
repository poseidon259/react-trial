import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { AdminLayout } from '~/layouts/admin-layout'
import { ProductNewForm } from '../../forms/product/product-new-form'

export const ProductNewPage = () => {

  localStorage.setItem('selectedParent', '3')
  localStorage.setItem('selectedChild', '5')

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Thêm mới sản phẩm
            </Heading>
          </Stack>
          <ProductNewForm />
        </Stack>
      </Box>
    </AdminLayout>
  )
}
