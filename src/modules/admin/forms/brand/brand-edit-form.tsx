import { Box, Button, FormControl, FormLabel, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ImageUpload } from '~/components/admin/upload/image-upload'
import { AddBrandFormSchema } from '~/validations/admin-validation'
import { useMutationAddBrand } from '../../api/add-brand.api'
import { useEffect, useState } from 'react'
import axiosClient from '~/libs/axios/axiosClient'
import { useMutationEditBrand } from '../../api/edit-brand.api'

type TBrand = {
  name: string
  image: File
}

export const BrandEditForm = (props: any) => {
  const { data } = props
  const [file, setFile] = useState<File>(new File([], ''))

  useEffect(() => {
    const getFileFromUrl = async () => {
      try {
        const response = await fetch(data.image) // Replace with your file URL
        const blob = await response.blob()
        const filename = 'old-image.png' // Replace with the desired filename
        const downloadedFile = new File([blob], filename, { type: blob.type })
        setFile(downloadedFile)
      } catch (error) {
        console.error('Error fetching file:', error)
      }
    }

    getFileFromUrl()
  }, [])

  const initialValues = {
    name: data.name,
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

  const { mutate, isLoading } = useMutationEditBrand()

  const onSubmit = (data: TBrand) => {
    data.image = file
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
                <ImageUpload data={data} onChange={(file: File) => {
                  field.onChange(file)
                  setFile(file)
                }} />
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
          Sửa
        </Button>
      </Stack>
    </Box>
  )
}
