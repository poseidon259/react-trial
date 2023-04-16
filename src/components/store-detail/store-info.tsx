import { Avatar, Box, Button, Flex, Icon, Image, Stack } from '@chakra-ui/react'
import { formatDate } from '~/libs'
import { Rating } from '../other/rating'
import { MdAllInbox, MdDateRange, MdFollowTheSigns, MdOutlineMailOutline, MdPhone, MdStarRate } from 'react-icons/md'

export const StoreInfo = (props: any) => {
  const { store } = props

  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} mb={{ base: '12', md: '12' }}>
      <Image maxH={'240px'} w={'full'} src={store.background_image} objectFit={'cover'} />
      <Flex justify={'start'} mt={-12} ml={15}>
        <Avatar
          size={'xl'}
          src={store.logo}
          css={{
            border: '2px solid white'
          }}
        />
      </Flex>
      <Flex justify={'end'} mt={-10} mr={4}>
        <Button
          {...props}
          px={4}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
          _hover={{
            bg: 'blue.500'
          }}
          _focus={{
            bg: 'blue.500'
          }}
        >
          Theo dõi
        </Button>
        <Button
          {...props}
          ml={'20px'}
          px={4}
          fontSize={'sm'}
          rounded={'full'}
          bg={'white'}
          color={'blue.400'}
          boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
          _hover={{
            bg: 'red.300',
            color: 'white'
          }}
          _focus={{
            bg: 'blue.500'
          }}
        >
          Nhắn tin
        </Button>
      </Flex>

      <Box py={{ base: '8', md: '8' }}>
        <Flex direction={'row'}>
          <Box flex={'6'}>
            <Flex flex={'1'} alignItems={'center'}>
              <Stack px={{ base: '4', md: '4' }} fontSize={'14px'}>
                <Box color={'blue.300'} cursor={'pointer'} fontWeight={'bold'}>
                  
                  {store.company_name}
                </Box>
                <Box><Icon as={MdAllInbox} boxSize={'5'} />Số lượng sản phẩm: {store.products.length}</Box>
                <Box><Icon as={MdOutlineMailOutline} boxSize={'5'} />Email: {store.email}</Box>
                <Box><Icon as={MdPhone} boxSize={'5'} />Số điện thoại: {store.phone_number}</Box>
              </Stack>
            </Flex>
          </Box>
          <Box flex={'5'}>
            <Stack px={{ base: '4', md: '4' }} fontSize={'14px'}>
              <Box><Icon as={MdDateRange} boxSize={'5'} />Ngày tham gia: {formatDate(store.created_at)}</Box>
              <Box display={'flex'}><Box pr={'10px'}><Icon as={MdStarRate} boxSize={'5'} />Đánh giá:</Box> <Rating defaultValue={4} /></Box>
              <Box><Icon as={MdFollowTheSigns} boxSize={'5'} />Người theo dõi: {100}</Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
