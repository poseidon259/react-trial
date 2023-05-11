import { Box, Icon, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { BiMoney, BiTask } from 'react-icons/bi'
import { MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { MiniStatistics } from '~/components/admin/card/MiniStatistics'
import IconBox from '~/components/admin/icons/IconBox'
import { AdminLayout } from '~/layouts/admin-layout'
import { TotalSpent } from '~/components/admin/static/TotalSpent'
import WeeklyRevenue from '~/components/admin/static/WeeklyRevenue'

export const DashboardPage = () => {
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  localStorage.setItem('selectedParent', '1')
  localStorage.setItem('selectedChild', '100')

  return (
    <AdminLayout>
      <Box px={'20px'}>
        <Text py={4} m={0} fontWeight={'medium'} fontSize={'20px'}>
          Dashboard
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={<Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />}
              />
            }
            name='Earnings'
            value='$350.4'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
              />
            }
            name='Spend this month'
            value='$642.39'
          />
          <MiniStatistics
            startContent={
              <IconBox w='56px' h='56px' bg={boxBg} icon={<Icon w='32px' h='32px' as={BiMoney} color={brandColor} />} />
            }
            growth='+23%'
            name='Sales'
            value='$574.34'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={<Icon w='32px' h='32px' as={GiReceiveMoney} color={brandColor} />}
              />
            }
            name='Your balance'
            value='$1,000'
          />
          <MiniStatistics
            startContent={
              <IconBox w='56px' h='56px' bbg={boxBg} icon={<Icon w='28px' h='28px' as={BiTask} color={brandColor} />} />
            }
            name='New Tasks'
            value='154'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={<Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />}
              />
            }
            name='Total Projects'
            value='2935'
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
          <TotalSpent />
          <WeeklyRevenue />
        </SimpleGrid>
      </Box>
    </AdminLayout>
  )
}
