import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useBreakpointValue
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../login/logo'
import { useNavigate } from 'react-router'
import { useCustomToast } from '~/hooks'
import { navigationFn } from '~/routes'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { BsFillBagHeartFill, BsFillCartFill } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineHistory, MdOutlineSearch, MdPublishedWithChanges, MdTipsAndUpdates } from 'react-icons/md'
import { SYSTEM_USER } from '~/configs'
import { isObjectEmpty } from '~/helper/isObjectEmpty'

export const Nav = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const userLogin = JSON.parse(localStorage.getItem('user') || '{}')
  const isLogin = !isObjectEmpty(userLogin) && userLogin.role === SYSTEM_USER
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useCustomToast()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (isLogin) {
      axiosClient.get('/profile').then((res: any) => {
        setUser(res.data)
      })
    }
  }, [])

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

  const handleToCart = () => {
    navigate(navigationFn.CART)
  }

  const handleToOrderHistory = () => {
    navigate(navigationFn.ORDER_HISTORY)
  }

  return (
    <Box as='section' pb={{ base: '12', md: '12' }}>
      <Box as='nav' bg='bg-surface' boxShadow='sm'>
        <HStack py={{ base: '12', md: '6' }} px={{ base: '12', md: '12' }} spacing='10' justify='space-between'>
          <HStack alignItems='center' onClick={handleToHome} cursor={'pointer'}>
            <Logo />
            <Text fontWeight='regular' fontSize='xl' textTransform={'uppercase'}>
              Trial
            </Text>
          </HStack>
          {isDesktop ? (
            <>
              <Flex alignItems='center' justifyContent={'center'} flex='1'>
                <Stack spacing={4} w={'50%'}>
                  <InputGroup>
                    <InputRightElement
                      h={'40px'}
                      w={'50px'}
                      backgroundColor={'primary'}
                      children={<Icon as={MdOutlineSearch} color={'white'} boxSize={'25px'} />}
                      my={'5px'}
                      mr={'10px'}
                      borderRadius={'md'}
                      cursor={'pointer'}
                    />
                    <Input
                      type='text'
                      h={'50px'}
                      w={'full'}
                      border={'1px solid'}
                      borderColor={'primary'}
                      placeholder='Tìm kiếm bất cứ thứ gì bạn muốn'
                    />
                  </InputGroup>
                </Stack>
              </Flex>
              <HStack spacing='3'>
                {isLogin ? (
                  <Flex alignItems={'center'}>
                    <Icon as={BsFillBagHeartFill} boxSize={'23px'} mr={'15px'} color={'primary'} cursor={'pointer'} />
                    <Icon
                      as={BsFillCartFill}
                      boxSize={'23px'}
                      mr={'20px'}
                      color={'primary'}
                      cursor={'pointer'}
                      onClick={() => handleToCart()}
                    />
                    <Menu>
                      <MenuButton>
                        <Wrap>
                          <WrapItem>
                            <Avatar size='sm' name='' src={user?.avatar} />
                          </WrapItem>
                        </Wrap>
                      </MenuButton>
                      <MenuList>
                        <MenuItem icon={<Icon as={MdTipsAndUpdates} />} onClick={handleLogout}>
                          Cập nhập thông tin
                        </MenuItem>
                        <MenuItem icon={<Icon as={MdPublishedWithChanges} />} onClick={handleLogout}>
                          Đổi mật khẩu
                        </MenuItem>
                        <MenuItem icon={<Icon as={MdOutlineHistory} />} onClick={handleToOrderHistory} >
                          Lịch sử đơn hàng
                        </MenuItem>
                        <MenuItem icon={<Icon as={AiOutlineLogout} />} onClick={handleLogout}>
                          Đăng xuất
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
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
            </>
          ) : (
            <IconButton variant='ghost' icon={<FiMenu fontSize='1.25rem' />} aria-label='Open Menu' />
          )}
        </HStack>
      </Box>
    </Box>
  )
}
