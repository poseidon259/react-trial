import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ImageUpload } from '~/components/admin/upload/image-upload'


type TBrand = {
  name: string
  image: File
}

export const ProductNewForm = () => {
  const initialValues = {
    name: '',
    image: new File([], '')
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TBrand>({
    defaultValues: initialValues,
    resolver: zodResolver(AddBrandFormSchema)
  })

  const { mutate, isLoading } = useMutationAddBrand()

  const onSubmit = (data: TBrand) => {
    mutate(data)
  }

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
      mr={3}
      as={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={4}>
        <Controller
          name='image'
          control={control}
          render={({ field }) => (
            <Box w='50%'>
              <FormControl id='image' isRequired>
                <FormLabel htmlFor='image'>Ảnh</FormLabel>
                <ImageUpload onChange={(file: File) => field.onChange(file)} />
              </FormControl>
              {errors.image && <Text variant='error'>{errors.image.message}</Text>}
            </Box>
          )}
        />
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Box w='50%'>
              <FormControl id='name' isRequired>
                <FormLabel htmlFor='name'>Tên</FormLabel>
                <Input {...field} id='name' type='text' name='name' />
              </FormControl>
              {errors.name && <Text variant='error'>{errors.name.message}</Text>}
            </Box>
          )}
        />
        <Button type='submit' backgroundColor={'blue.500'} color={'white'} w={'120px'} isLoading={isLoading}>
          Tạo mới
        </Button>
      </Stack>
    </Box>
  )
}
