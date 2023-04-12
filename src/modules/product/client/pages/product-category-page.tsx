import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Pagination } from '~/components/other/pagination'
import { AccordionCategory } from '~/components/product-category/accordion-category'
import { FilterProductCategory } from '~/components/product-category/filter-product-category'
import { ProductCategory } from '~/components/product-category/product-category'
import { SlickSlider } from '~/components/slick/slick-slider'
import { LIMIT_PER_PAGE_PRODUCT_CATEGORY } from '~/configs'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const ProductCategoryPage = () => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [banners, setBanners] = useState([])
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [isLoadingProductCategory, setIsLoadingProductCategory] = useState(true)
  const limit = LIMIT_PER_PAGE_PRODUCT_CATEGORY

  const navigate = useNavigate()
  const { toastError } = useCustomToast()

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    axiosClient
      .get(`client/category/${id}`)
      .then((res: any) => {
        setCategory(res)
        setIsLoadingCategory(false)
      })
      .catch((err) => {
        navigate(navigationFn.HOME)
        toastError(err.response.data.message)
      })
  }, [])

  useEffect(() => {
    axiosClient
      .get(`client/category/${id}/products`, {
        params: {
          page: currentPage,
          limit: limit
        }
      })
      .then((res: any) => {
        setProducts(res.products)
        setCurrentPage(res.current_page)
        setLastPage(res.last_page)
        setIsLoadingProductCategory(false)
      })
      .catch((err) => {
        navigate(navigationFn.HOME)
        toastError(err.response.data.message)
      })
  }, [currentPage, limit])

  useEffect(() => {
    axiosClient.get('list_banner').then((res: any) => {
      setBanners(res.data)
      setIsLoadingBanner(false)
    })
  }, [])

  return (
    <DefaultLayout>
      <Box px={{ base: '12', md: '24' }}>
        {isLoadingBanner ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <SlickSlider images={banners} />
        )}
        <Flex direction='row'>
          <>
            <Box flex='3' pr={{ base: '8', md: '8' }}>
              {isLoadingCategory ? (
                <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
                  <Skeleton height={'400px'} width='100%' />
                </Flex>
              ) : (
                <>
                  <AccordionCategory category={category} />
                  <FilterProductCategory />
                </>
              )}
            </Box>
            <Box flex='7'>
              {isLoadingProductCategory ? (
                <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
                  <Skeleton height={'400px'} width='100%' />
                </Flex>
              ) : (
                <>
                  <ProductCategory products={products} />
                  {lastPage > 1 && (
                    <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />
                  )}
                </>
              )}
            </Box>
          </>
        </Flex>
      </Box>
    </DefaultLayout>
  )
}
