import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react"
import { AdminLayout } from "~/layouts/admin-layout"
import { UserNewForm } from "../../forms/user/user-new-form"

export const UserNewPage = () => {
    return (
        <AdminLayout>
        <Box bg={useColorModeValue('gray.50', 'gray.800')} w={'full'} minH={'100vh'}>
          <Stack spacing={8} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'2xl'} textAlign={'center'}>
                Thêm mới người dùng
              </Heading>
            </Stack>
            <UserNewForm />
          </Stack>
        </Box>
      </AdminLayout>
    )
}