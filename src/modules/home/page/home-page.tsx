import { Box, Flex, Skeleton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Category } from '~/components/category/category'
import { Pagination } from '~/components/other/pagination'
import { ProductList } from '~/components/product-list/product-list'
import { SlickSlider } from '~/components/slick/slick-slider'
import { StoreList } from '~/components/store-list/store-list'
import { LIMIT_PER_PAGE_PRODUCT } from '~/configs'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

export const HomePage = () => {
  const [banners, setBanners] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)
  const [isLoadingProduct, setIsLoadingProduct] = useState(true)
  const [lastPage, setLastPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const limit = LIMIT_PER_PAGE_PRODUCT

  const [stores, setStores] = useState([])
  const [isLoadingStore, setIsLoadingStore] = useState(true)

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    axiosClient.get('client/stores/homepage').then((res: any) => {
      setStores(res)
      setIsLoadingStore(false)
    })
  }, [])

  useEffect(() => {
    axiosClient.get('list_banner').then((res: any) => {
      setBanners(res.data)
      setIsLoadingBanner(false)
    })
  }, [])

  useEffect(() => {
    axiosClient.get('list_category').then((res: any) => {
      setCategories(res.categories)
      setIsLoadingCategory(false)
    })
  }, [])

  useEffect(() => {
    axiosClient.get('list_product', { params: { limit: limit, page: currentPage } }).then((res: any) => {
      setProducts(res.products)
      setCurrentPage(res.current_page)
      setLastPage(res.last_page)
      setIsLoadingProduct(false)
    })
  }, [currentPage, limit])
  return (
    <>
      <DefaultLayout>
        <Box>
          {isLoadingBanner ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <SlickSlider images={banners} />
          )}
          {isLoadingCategory ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <Category categories={categories} />
          )}
          {isLoadingStore ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <>
              {stores.length === 0 ? (
                <Text> Hiện chưa có cửa hàng đối tác </Text>
              ) : (
                <StoreList images={stores} />
              )}
            </>
          )}
          {isLoadingProduct ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <>
              {products.length === 0 ? (
                <Text> Không tồn tại sản phẩm </Text>
              ) : (
                <>
                  <ProductList products={products} max={4} />
                  {lastPage > 1 && (
                    <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />
                  )}
                </>
              )}
            </>
          )}
        </Box>
      </DefaultLayout>
    </>
  )
}
