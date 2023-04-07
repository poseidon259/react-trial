import { Box, Flex } from '@chakra-ui/react'
import { Footer } from '~/components/other/footer'
import { Nav } from '~/components/other/nav'

export const DefaultLayout = ({ children }: any) => {
  return (
    <Flex direction='column' minHeight='100vh'>
      <Nav />
      <Box px={{ base: '12', md: '12' }} flex='1'>{children}</Box>
      <Footer />
    </Flex>
  )
}
