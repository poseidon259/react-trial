import { Box, Flex, } from '@chakra-ui/react'
import { SideBar } from '~/components/admin/side-bar/sidebar'


export const AdminLayout = ({ children }: any) => {

  return (
    <Flex direction='column' minHeight='100vh'>
      <SideBar>
        {children}
      </SideBar>
    </Flex>
  )
}
