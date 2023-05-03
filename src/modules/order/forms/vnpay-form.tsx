import { Box, Flex, FormControl, FormLabel, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { Images } from '~/assets'
import { Controller } from 'react-hook-form'

export const VNPayForm = (props: any) => {
  const { total, control, errors } = props
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={8}>
      <Box flex={6}>
        <Box
          width={'300px'}
          height={'200px'}
          bgImage={`url(${Images.vnpay2})`}
          bgPos='center'
          bgRepeat='no-repeat'
          bgSize='contain'
          pr={2}
        />
      </Box>
      <Box flex={6}>
        <Stack spacing={2}>
          <Box>
            <FormControl id='total'>
              <FormLabel htmlFor='total'>Tổng tiền</FormLabel>
              <Input id='total' name='total' isDisabled={true} value={total} />
            </FormControl>
          </Box>
          <Controller
            name='payment_note'
            control={control}
            render={({ field }) => (
              <Box>
                <FormControl id='payment_note'>
                  <FormLabel htmlFor='payment_note'>Nội dung thanh toán</FormLabel>
                  <Textarea {...field} id='payment_note' name='payment_note' rows={5} resize={'none'} />
                  {errors.payment_note && <Text variant='error'>{errors.payment_note.message}</Text>}
                  <Text fontSize='sm' color='gray.500' py={2}>
                    *Vui lòng nhập tiếng việt không dấu
                  </Text>
                </FormControl>
              </Box>
            )}
          />
        </Stack>
      </Box>
    </Flex>
  )
}
