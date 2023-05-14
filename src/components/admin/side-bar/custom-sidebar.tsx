import { Box, Text, VStack, Collapse, Icon, Flex, Link } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { FiActivity, FiBox } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { TbReportAnalytics } from 'react-icons/tb'
import { navigationFn } from '~/routes'

// Sidebar data
interface SidebarCategory {
  id: number
  title: string
  icon: any
  subcategories: SidebarSubcategory[]
  to?: string
}

interface SidebarSubcategory {
  id: number
  title: string
  to?: string
}

const sidebarData: SidebarCategory[] = [
  {
    id: 1,
    title: 'Dashboard',
    to: navigationFn.ADMIN_DASHBOARD,
    icon: RxDashboard,
    subcategories: []
  },
  {
    id: 2,
    title: 'Quản lý thương hiệu',
    icon: FiActivity,
    subcategories: [
      {
        id: 3,
        title: 'Thêm mới',
        to: navigationFn.ADMIN_ADD_BRAND
      },
      {
        id: 4,
        title: 'Quản lý',
        to: navigationFn.ADMIN_BRAND
      }
    ]
  },
  {
    id: 3,
    title: 'Quản lý sản phẩm',
    icon: FiBox,
    subcategories: [
      {
        id: 5,
        title: 'Thêm mới',
        to: navigationFn.ADMIN_ADD_PRODUCT
      },
      {
        id: 6,
        title: 'Quản lý',
        to: navigationFn.ADMIN_PRODUCT  
      }
    ]
  },
  {
    id: 4,
    title: 'Quản lý khách hàng',
    icon: AiOutlineUser,
    subcategories: [
      {
        id: 7,
        title: 'Thêm mới',
        to: navigationFn.ADMIN_ADD_USER
      },
      {
        id: 8,
        title: 'Quản lý',
        to: navigationFn.ADMIN_USER
      }
    ]
  },
  {
    id: 5,
    title: 'Quản lý đơn hàng',
    icon: TbReportAnalytics,
    subcategories: [
      {
        id: 9,
        title: 'Thêm mới'
      },
      {
        id: 10,
        title: 'Quản lý',
        to: navigationFn.ADMIN_ORDER
      }
    ]
  }
]

export const CustomSideBar = () => {
  const [selectedParent, setSelectedParent] = useState<number | null>(null)
  const [selectedChild, setSelectedChild] = useState<number | null>(null)

  useEffect(() => {
    const storedParent = localStorage.getItem('selectedParent')
    const storedChild = localStorage.getItem('selectedChild')
    if (storedParent) {
      setSelectedParent(Number(storedParent))
    }

    if (storedChild) {
      setSelectedChild(Number(storedChild))
    }
  }, [])

  const toggleCategory = (categoryId: number) => {
    if (categoryId === selectedParent) {
      setSelectedParent(null)
      localStorage.removeItem('selectedParent')
    } else {
      setSelectedParent(categoryId)
      localStorage.setItem('selectedParent', String(categoryId))
    }
  }

  const handleChildClick = (parentId: number, childId: number) => {
    setSelectedParent(parentId)
    setSelectedChild(childId)
    localStorage.setItem('selectedParent', String(parentId))
    localStorage.setItem('selectedChild', String(childId))
  }

  const handleParentClick = (parentId: number, data: any) => {
    setSelectedParent(parentId)
    localStorage.setItem('selectedParent', String(parentId))

    if (data.length <= 0) {
      localStorage.removeItem('selectedChild')
    }
  }

  return (
    <Box>
      <VStack align='start' pl={10} spacing='2'>
        {sidebarData.map((category) => (
          <VStack key={category.id} align='start' spacing='1'>
            <Flex alignItems='center' cursor='pointer' onClick={() => toggleCategory(category.id)} py={'8px'}>
              <Box
                as='span'
                flex='1'
                textAlign='left'
                fontSize={'15px'}
                onClick={() => handleParentClick(category.id, category.subcategories)}
              >
                {category.icon && <Icon mr='4' fontSize='16' as={category.icon} />}

                {category.to != null ? (
                  <Link
                    href={category.to}
                    style={{ textDecoration: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                    color={{}}
                    key={category.id}
                  >
                    {category.title}
                  </Link>
                ) : (
                  category.title
                )}
              </Box>
              {category.subcategories.length > 0 && (
                <Icon as={selectedParent == category.id ? ChevronDownIcon : ChevronRightIcon} ml={2} />
              )}
            </Flex>
            {category.subcategories.length > 0 && (
              <Collapse in={category.id == selectedParent} animateOpacity>
                <VStack align='start' ml='4' mt='2' spacing='1' pb={4}>
                  {category.subcategories.map((subcategory) => (
                    <Link
                      href={subcategory.to}
                      style={{ textDecoration: 'none' }}
                      _focus={{ boxShadow: 'none' }}
                      color={{}}
                      py={2}
                      key={subcategory.id}
                    >
                      <Text
                        as={'span'}
                        cursor='pointer'
                        fontSize={'14px'}
                        fontWeight={'bold'}
                        py={2}
                        px={4}
                        w={'100%'}
                        borderRadius={'md'}
                        color={
                          subcategory.id === selectedChild && category.id === selectedParent ? 'blue.500' : 'inherit'
                        }
                        backgroundColor={
                          subcategory.id === selectedChild && category.id === selectedParent ? 'blue.50' : 'inherit'
                        }
                        onClick={() => handleChildClick(category.id, subcategory.id)}
                      >
                        {subcategory.title}
                      </Text>
                    </Link>
                  ))}
                </VStack>
              </Collapse>
            )}
          </VStack>
        ))}
      </VStack>
    </Box>
  )
}
