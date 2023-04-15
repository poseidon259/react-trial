import { Avatar, Box, Flex, Image, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { PriceTag } from '../other/price-tag'
import { useNavigate } from 'react-router'

export const StoreCard = (props: any) => {
  const navigate = useNavigate()

  const viewProductDetail = (id: any) => {
    navigate(`/product/${id}`)
  }

  const viewStoreDetail = (id: any) => {
    navigate(`/store/${id}`)
  }

  const { image } = props
  return (
    <Box
      border={'1px solid'}
      borderColor={'gray.200'}
      mx={{ base: '2', md: '2' }}
      p={{ base: '4', md: '4' }}
      maxH={'350px'}
    >
      <Stack px={{ base: '2', md: '2' }}>
        <Flex alignItems={'center'} flex={'1'}>
          <Wrap onClick={() => viewStoreDetail(image.id)}>
            <WrapItem cursor={'pointer'}>
              <Avatar name={image.company_name} src={image.logo} size='lg' />
            </WrapItem>
          </Wrap>
          <Stack px={{ base: '4', md: '4' }}>
            <Box color={'blue.300'} cursor={'pointer'} onClick={() => viewStoreDetail(image.id)}>
              {image.company_name}
            </Box>
            <Box>Số lượng sản phẩm: {image.products.length}</Box>
          </Stack>
        </Flex>
      </Stack>
      <Stack py={{ base: '4', md: '4' }}>
        <Flex>
          {image.products.slice(0, 3).map((item: any) => {
            return (
              <Box key={item.product_images[0].id} boxSize='sm' px={{ base: '2', md: '2' }}>
                <Image
                  src={item.product_images[0].image}
                  cursor={'pointer'}
                  onClick={() => viewProductDetail(item.id)}
                />
                <Box py={{ base: '4', md: '4' }}>
                  <PriceTag salePrice={123} price={1234} currency='VND' />
                </Box>
              </Box>
            )
          })}
        </Flex>
      </Stack>
    </Box>
  )
}
