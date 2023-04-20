import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ListCommentCard } from '~/components/comment/list-comment-card'
import { Pagination } from '~/components/other/pagination'
import { ProductDetail } from '~/components/product-detail/product-detail'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { CommentPublicForm } from '../form/create-comment-product'
import { LIMIT_PER_PAGE_COMMENT } from '~/configs'
import { useCustomToast } from '~/hooks'
import { navigationFn } from '~/routes'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [comments, setComments] = useState([])
  const [isLoadingProductDetail, setIsLoadingProductDetail] = useState(true)
  const [isLoadingComment, setIsLoadingComment] = useState(true)
  const [limit, setLimit] = useState(LIMIT_PER_PAGE_COMMENT)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const isLogin = localStorage.getItem('user') ?? false
  const [quantity, setQuantity] = useState(1)
  const [masterField, setMasterField] = useState('')
  const { toastSuccess, toastError } = useCustomToast()
  const [createdComment, setCreatedComment] = useState(false)
  const navigate = useNavigate()

  const handleCreateComment = () => {
    setCreatedComment(!createdComment)
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
  }

  const handleQuantityCallback = (quantity: number) => {
    setQuantity(quantity)
  }

  const handleMasterFieldClick = (masterField: any) => {
    setMasterField(masterField)
  }

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    axiosClient
      .get(`client/product/${id}`, {
        params: {
          child_master_field_id: masterField
        }
      })
      .then((res) => {
        setProduct(res.data)
        setIsLoadingProductDetail(false)
      })
      .catch((err) => {
        toastError(err.response.data.message)
        navigate(navigationFn.HOME)
      })
  }, [masterField])

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
  }, [currentPage, limit, createdComment])

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
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <ProductDetail
            quantityCallback={handleQuantityCallback}
            masterFieldCallback={handleMasterFieldClick}
            masterField={masterField}
            quantity={quantity}
            product={product}
          />
        )}
        {isLoadingComment ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
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
        {isLogin && <CommentPublicForm callback={handleCreateComment} />}
      </DefaultLayout>
    </>
  )
}
