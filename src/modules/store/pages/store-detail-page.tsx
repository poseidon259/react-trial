import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Pagination } from '~/components/other/pagination'
import { SlickSlider } from '~/components/slick/slick-slider'
import { StoreInfo } from '~/components/store-detail/store-info'
import { StoreProductList } from '~/components/store-detail/store-product-list'
import { FALSE, LIMIT_PER_PAGE_STORE_PRODUCT, TRUE } from '~/configs'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const StoreDetailPage = () => {
  const { id } = useParams()
  const [store, setStore] = useState<any>(null)
  const [products, setProducts] = useState([])
  const [banners, setBanners] = useState([])
  const [isLoadingStoreDetail, setIsLoadingStoreDetail] = useState(true)
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)
  const { toastSuccess, toastError } = useCustomToast()
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [sortPrice, setSortPrice] = useState('')
  const [popular, setPopular] = useState(FALSE)
  const [newest, setNewest] = useState(TRUE)
  const options = [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' }
  ]
  const max = 4
  const limit = LIMIT_PER_PAGE_STORE_PRODUCT

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const onSortPriceChange = (value: any) => {
    if (value === '') {
      setSortPrice(value)
      setPopular(FALSE)
      setNewest(TRUE)
    } else {
      setSortPrice(value)
      setPopular(FALSE)
      setNewest(FALSE)
    }
  }

  const handlePopular = () => {
    setPopular(popular ? FALSE : TRUE)
    setNewest(FALSE)
    setSortPrice('')
  }

  const handleNewest = () => {
    setPopular(FALSE)
    setNewest(newest ? FALSE : TRUE)
    setSortPrice('')
  }

  useEffect(() => {
    axiosClient.get(`client/store/${id}/banners`).then((res) => {
      setBanners(res.data)
      setIsLoadingBanner(false)
    })
  }, [])

  useEffect(() => {
    axiosClient
      .get(`client/store/${id}`)
      .then((res) => {
        setStore(res.data)
        setIsLoadingStoreDetail(false)
      })
      .catch((err) => {
        toastError(err.response.data.message)
        navigate(navigationFn.HOME)
      })
  }, [])

  useEffect(() => {
    axiosClient
      .get(`client/store/${id}/products`, {
        params: {
          page: currentPage,
          limit: limit,
          sort_price: sortPrice,
          popular: popular,
          newest: newest
        }
      })
      .then((res: any) => {
        setProducts(res.products)
        setLastPage(res.last_page)
        setCurrentPage(res.current_page)
        setIsLoadingProduct(false)
      })
      .catch((err) => {
        toastError(err.response.data.message)
        navigate(navigationFn.HOME)
      })
  }, [currentPage, sortPrice, popular, newest])

  return (
    <DefaultLayout>
      <Box px={{ base: '12', md: '24' }}>
        {isLoadingStoreDetail ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <Box>
            <StoreInfo store={store} />
          </Box>
        )}
        {isLoadingBanner ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <SlickSlider images={banners} />
        )}
        {isLoadingProduct ? (
          <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
            <Skeleton height={'400px'} width='100%' />
          </Flex>
        ) : (
          <>
            <StoreProductList
              products={products}
              newest={newest}
              popular={popular}
              options={options}
              max={max}
              sortPrice={sortPrice}
              onSortPriceChangeCallback={onSortPriceChange}
              handlePopularCallback={handlePopular}
              handleNewestCallback={handleNewest}
            />
            {lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />}
          </>
        )}
      </Box>
    </DefaultLayout>
  )
}
