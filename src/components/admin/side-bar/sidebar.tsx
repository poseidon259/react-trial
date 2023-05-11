import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi'
import { Logo } from '~/components/login/logo'
import { MdPublishedWithChanges, MdTipsAndUpdates } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai'
import { SearchBar } from './SearchBar'
import { CustomSideBar } from './custom-sidebar'

export const SideBar = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height='20'
        alignItems='center'
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth='1px'
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant='outline'
          aria-label='open menu'
          icon={<FiMenu />}
        />

        <HStack spacing={{ base: '0', md: '6' }}>
          <SearchBar />
          <IconButton size='lg' variant='ghost' aria-label='open menu' icon={<FiBell />} />
          <Flex alignItems='center'>
            <Menu>
              <MenuButton>
                <Wrap>
                  <WrapItem>
                    <Flex alignItems='center'>
                      <Avatar size='sm' name='' src='none' />
                      <Text as='span' px='2'>
                        Name
                        <Icon as={FiChevronDown} />
                      </Text>
                    </Flex>
                  </WrapItem>
                </Wrap>
              </MenuButton>
              <MenuList>
                <MenuItem icon={<Icon as={MdTipsAndUpdates} />}>Cập nhập thông tin</MenuItem>
                <MenuItem icon={<Icon as={MdPublishedWithChanges} />}>Đổi mật khẩu</MenuItem>
                <MenuItem icon={<Icon as={AiOutlineLogout} />}>Đăng xuất</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
      <Box ml={{ base: 0, md: 72 }}>{children}</Box>
    </Box>
  )
}

const SidebarContent = (props: any) => {
  const { onClose, ...rest } = props
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: '72' }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <HStack alignItems='center' cursor='pointer'>
          <Logo />
          <Text fontWeight='regular' fontSize='xl' textTransform='uppercase'>
            Trial
          </Text>
        </HStack>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <CustomSideBar />
    </Box>
  )
}
