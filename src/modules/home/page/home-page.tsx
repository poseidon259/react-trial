import { Box, Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Category } from '~/components/category/category'
import { ProductList } from '~/components/product/product'
import { SlickSlider } from '~/components/slick/slick-slider'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

export const HomePage = () => {
  const [banners, setBanners] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)

  useEffect(() => {
    axiosClient.get('/banner/list').then((res: any) => {
      setBanners(res.data)
      setIsLoadingBanner(false)
    })
  }, [])

  useEffect(() => {
    axiosClient.get('category/list').then((res: any) => {
      setCategories(res.categories)
      setIsLoadingCategory(false)
    })
  }, [])

  return (
    <>
      <DefaultLayout>
        <Box px={{ base: '12', md: '36' }}>
          {isLoadingBanner ? (
            <Flex justifyContent='center' alignItems='center' mx='200px'>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </Flex>
          ) : (
            <SlickSlider banners={banners} />
          )}
          {isLoadingCategory ? (
            <Flex justifyContent='center' alignItems='center' mx='200px' pt='20px'>
              <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            </Flex>
          ) : (
            <Category categories={categories} />
          )}

          <ProductList />
        </Box>
      </DefaultLayout>
    </>
  )
}
