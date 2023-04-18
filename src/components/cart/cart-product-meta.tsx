import { Box, Image, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'

export const CartProductMeta = (props: any) => {
  const { value } = props
  console.log(value)
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
          <Text fontWeight='medium'>{value.product_name}</Text>
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
