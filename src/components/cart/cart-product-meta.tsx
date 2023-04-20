import { Box, Image, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const CartProductMeta = (props: any) => {
  const { value } = props
  const navigate = useNavigate()

  const handleToProduct = (id: any) => {
    navigate(`/product/${id}`)
  }

  return (
    <Stack direction='row' spacing='5' width='full'>
      <Image
        rounded='lg'
        width='120px'
        height='120px'
        fit='cover'
        src={value.product_images[0].image}
        draggable='false'
        loading='lazy'
      />
      <Box pt='4'>
        <Stack spacing='0.5'>
          <Text
            cursor={'pointer'}
            onClick={() => handleToProduct(value.product_id)}
            _hover={{
              color: 'primary'
            }}
          >
            {value.product_name}
          </Text>
          {value.master_field_name ? (
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
