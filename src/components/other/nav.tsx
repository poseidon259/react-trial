import { Box, Button, ButtonGroup, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../login/logo'
import { useNavigate } from 'react-router'
import { useCustomToast } from '~/hooks'
import { navigationFn } from '~/routes'

export const Nav = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isLogin = localStorage.getItem('user')
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()

  const handleLogout = () => {
    if (isLogin) {
      localStorage.removeItem('user')
      toastSuccess('Đăng xuất thành công')
      navigate(navigationFn.LOGIN)
    } else {
      toastError('Bạn chưa đăng nhập')
    }
  }

  const handleLogin = () => {
    if (isLogin) {
      toastError('Bạn đã đăng nhập')
    } else {
      navigate(navigationFn.LOGIN)
    }
  }

  const handleRegister = () => {
    navigate(navigationFn.REGISTER)
  }

  const handleToHome = () => {
    navigate(navigationFn.HOME)
  }

  return (
    <Box as='section' pb={{ base: '12', md: '12' }}>
      <Box as='nav' bg='bg-surface' boxShadow='sm'>
        <HStack py={{ base: '12', md: '6' }} px={{ base: '12', md: '12' }} spacing='10' justify='space-between'>
          <Logo onClick={ handleToHome } cursor={'pointer'} />
          {isDesktop ? (
            <Flex justify='space-between' flex='1'>
              <ButtonGroup variant='link' spacing='8'>
                {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
              </ButtonGroup>
              <HStack spacing='3'>
                {isLogin ? (
                  <Button variant='ghost' onClick={handleLogout}>
                    Đăng xuất
                  </Button>
                ) : (
                  <>
                    <Button variant='ghost' border='1px solid #CBD5E0' onClick={handleRegister}>
                      Đăng ký
                    </Button>
                    <Button variant='primary' onClick={handleLogin}>
                      Đăng nhập
                    </Button>
                  </>
                )}
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
