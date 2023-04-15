import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Stack,
  Textarea
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { CommentFormClientSchema } from '~/validations'
import ReactStars from 'react-rating-stars-component'
import { useMutationCreateComment } from '../api'

type TComment = {
  rating: number
  content: string
}

export const CommentPublicForm = () => {
  const initialValues = {
    rating: 0,
    content: '',
  } as TComment

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TComment>({
    defaultValues: initialValues,
    resolver: zodResolver(CommentFormClientSchema)
  })

  const { mutate, isLoading } = useMutationCreateComment()

  const onSubmit = (data: TComment) => {
    mutate(data)
  }

  return (
    <Box as='form' maxW='lg' onSubmit={handleSubmit(onSubmit)} py={{ base: '12', md: '12' }}>
      <Stack spacing='6'>
        <Heading size={{ base: 'xs', md: 'lg' }}>Thêm đánh giá</Heading>
        <FormControl isInvalid={!!errors.rating}>
          <FormLabel htmlFor='rating'>Thang điểm</FormLabel>
          <Controller
            name='rating'
            control={control}
            render={({ field }) => (
              <ReactStars
                count={5}
                onChange={(rating: number) => field.onChange(rating)}
                size={20}
                activeColor='#ffd700'
                value={field.value}
              />
            )}
          />
          <FormErrorMessage>{errors.rating?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.content}>
          <FormLabel htmlFor='content'>Nội dung đánh giá</FormLabel>
          <Controller
            name='content'
            control={control}
            render={({ field }) => <Textarea {...field} id='content' rows={4} cols={4} resize={'none'} />}
          />
          <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
        </FormControl>
        <Button type='submit' colorScheme='blue' isLoading={isLoading} >
          Gửi đánh giá
        </Button>
      </Stack>
    </Box>
  )
}
