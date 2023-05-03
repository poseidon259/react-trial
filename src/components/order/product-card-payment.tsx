import { Box, Image, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const ProductCartPayment = (props: any) => {
  const { value } = props
  const navigate = useNavigate()

  const handleToProduct = (id: any) => {
    navigate(`/product/${id}`)
  }

  return (
    <Stack direction='row' spacing='5' width='full'>
      <Image
        rounded='lg'
        width='60px'
        height='60px'
        fit='cover'
        src={value.product_images[0].image}
        draggable='false'
        loading='lazy'
      />
      <Box>
        <Stack spacing='0.5'>
          <Text
            cursor={'pointer'}
            onClick={() => handleToProduct(value.product_id)}
            _hover={{
              color: 'primary'
            }}
            fontSize={'sm'}
          >
            {value.product_name}
          </Text>
          {value.child_master_field_id ? (
            <Text color={mode('gray.600', 'gray.400')} fontSize='sm' textTransform={'capitalize'}>
              {value.master_field_name}: {value.child_master_field_name}
            </Text>
          ) : (
            <Text color={mode('gray.600', 'gray.400')} fontSize='sm'>
              Không có mô tả
            </Text>
          )}
        </Stack>
      </Box>
    </Stack>
  )
}
