import { Box, Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Category } from '~/components/category/category'
import { Pagination } from '~/components/other/pagination'
import { ProductList } from '~/components/product-list/product-list'
import { SlickSlider } from '~/components/slick/slick-slider'
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
  const [limit, setLimit] = useState(4)

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    axiosClient.get('/list_banner').then((res: any) => {
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
        <Box px={{ base: '12', md: '36' }}>
          {isLoadingBanner ? (
            <Flex justifyContent='center' alignItems='center' mx='200px'>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </Flex>
          ) : (
            <SlickSlider images={banners} />
          )}
          {isLoadingCategory ? (
            <Flex justifyContent='center' alignItems='center' mx='200px' pt='20px'>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </Flex>
          ) : (
            <Category categories={categories} />
          )}
          {isLoadingProduct ? (
            <Flex justifyContent='center' alignItems='center' mx='200px' pt='20px'>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </Flex>
          ) : (
            <>
              <ProductList products={products} />
              {lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} onPageChange={onPageChange} />}
            </>
          )}
        </Box>
      </DefaultLayout>
    </>
  )
}
