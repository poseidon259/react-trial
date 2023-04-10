import { Box, Divider, Flex, Spinner, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ListCommentCard } from '~/components/comment/list-comment-card'
import { Pagination } from '~/components/other/pagination'
import { ProductDetail } from '~/components/product-detail/product-detail'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { CommentPublicForm } from '../form/create-comment-product'
import axiosClientFormData from '~/libs/axios/axiosClientFormData'
import { useQueryClient } from 'react-query'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [comments, setComments] = useState([])
  const [isLoadingProductDetail, setIsLoadingProductDetail] = useState(true)
  const [isLoadingComment, setIsLoadingComment] = useState(true)
  const [limit, setLimit] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const isLogin = localStorage.getItem('user') ?? false

  const [quantity, setQuantity] = useState(1)

  const handleMasterFieldCallback = (state: any) => {
    console.log(state)
  }

  const handleQuantityCallback = (quantity: number) => {
    setQuantity(quantity)
  }

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    axiosClient.get(`client/product/${id}`).then((res) => {
      setProduct(res.data)
      setIsLoadingProductDetail(false)
    })
  }, [])

  useEffect(() => {
    axiosClient
      .get(`client/product/${id}/comments`, {
        params: {
          limit: limit,
          page: currentPage
        }
      })
      .then((res: any) => {
        setComments(res.comments)
        setLastPage(res.last_page)
        setCurrentPage(res.current_page)
        setIsLoadingComment(false)
      })
  }, [currentPage, limit, comments])

  return (
    <>
      <DefaultLayout>
        <Box textAlign='center'>
          <Text pt={'20px'} color={'primary'} textTransform={'uppercase'}>
            Trial
          </Text>
          <Text fontSize={'40px'}>Chi tiết sản phẩm</Text>
          <Text pb={'20px'} fontWeight='light'>
            Được sử dụng để hiển thị chi tiết sản phẩm với các bộ sưu tập ảnh đẹp.
          </Text>
        </Box>
        {isLoadingProductDetail ? (
          <Flex justifyContent='center' alignItems='center' mx='200px'>
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
          </Flex>
        ) : (
          <ProductDetail
            quantityCallback={handleQuantityCallback}
            masterFieldCallback={handleMasterFieldCallback}
            quantity={quantity}
            product={product}
          />
        )}
        {isLoadingComment ? (
          <Flex justifyContent='center' alignItems='center' mx='200px' pt={'20px'}>
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
          </Flex>
        ) : (
          <Box py={{ base: '12', md: '12' }}>
            <Box border={'1px'} borderColor={'gray.200'} borderRadius={'md'}>
              <Text fontSize={'20px'} fontWeight={'bold'} p={'10px'}>
                Đánh giá sản phẩm
              </Text>
              {comments.length > 0 ? (
                <>
                  <ListCommentCard comments={comments} />
                  {lastPage > 1 && (
                    <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />
                  )}
                </>
              ) : (
                <Text textAlign='center' p='10px' fontWeight={'light'}>
                  Chưa có đánh giá nào
                </Text>
              )}
            </Box>
          </Box>
        )}
        {isLogin && <CommentPublicForm />}
      </DefaultLayout>
    </>
  )
}
