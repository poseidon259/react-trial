import { Box, Button, ButtonGroup, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../login/logo'
import { useNavigate } from 'react-router'
import { useCustomToast } from '~/hooks'
import { navigationFn } from '~/routes'

export const Nav = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isLogin = localStorage.getItem('user')
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useCustomToast();

  const handleLogout = () => {
    if (isLogin) {
      localStorage.removeItem('user')
      toastSuccess('Logout success')
      navigate(navigationFn.LOGIN)
    } else {
      toastError('You are not logged in')
    }
  }

  return (
    <Box as='section' pb={{ base: '12', md: '12' }}>
      <Box as='nav' bg='bg-surface' boxShadow='sm'>
        <HStack py={{ base: '12', md: '6' }} px={{ base: '12', md: '12' }} spacing='10' justify='space-between'>
          <Logo />
          {isDesktop ? (
            <Flex justify='space-between' flex='1'>
              <ButtonGroup variant='link' spacing='8'>
                {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
              </ButtonGroup>
              <HStack spacing='3'>
                <Button variant='ghost' border='1px solid #CBD5E0'>
                  Sign in
                </Button>
                <Button variant='primary'>Sign up</Button>
                <Button variant='ghost' onClick={handleLogout}>
                  Logout
                </Button>
              </HStack>
            </Flex>
          ) : (
            <IconButton variant='ghost' icon={<FiMenu fontSize='1.25rem' />} aria-label='Open Menu' />
          )}
        </HStack>
      </Box>
    </Box>
  )
}
