import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { AdminLayout } from '~/layouts/admin-layout'
import { BrandNewForm } from '../../forms/brand/brand-new-form'

export const BrandNewPage = () => {

  localStorage.setItem('selectedParent', '2')
  localStorage.setItem('selectedChild', '3')

  return (
    <AdminLayout>
      <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
          <Stack spacing={8} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'2xl'} textAlign={'center'}>
                Thêm mới thương hiệu
              </Heading>
            </Stack>
            <BrandNewForm />
          </Stack>
        </Box>
    </AdminLayout>
  )
}
