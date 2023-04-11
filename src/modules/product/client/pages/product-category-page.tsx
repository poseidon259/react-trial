import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Skeleton,
  Spinner
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AccordionCategory } from '~/components/product-category/accordion-category'
import { FilterProductCategory } from '~/components/product-category/filter-product-category'
import { SlickSlider } from '~/components/slick/slick-slider'
import { LIMIT_PER_PAGE_PRODUCT_CATEGORY } from '~/configs'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const ProductCategoryPage = () => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [banners, setBanners] = useState([])
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [lastPage, setLastPage] = useState(1)
  const [isLoadingProductCategory, setIsLoadingProductCategory] = useState(true)
  const limit = LIMIT_PER_PAGE_PRODUCT_CATEGORY
  const navigate = useNavigate()
  const { toastError } = useCustomToast()

  useEffect(() => {
    axiosClient
      .get(`client/category/${id}/products`, { params: { limit: limit, page: currentPage } })
      .then((res: any) => {
        setCategory(res.categories)
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

  console.log(category)

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
          {isLoadingProductCategory ? (
            <Flex justifyContent='center' pb={{ base: '12', md: '12' }}>
              <Skeleton height={'400px'} width='100%' />
            </Flex>
          ) : (
            <>
              <Box flex='3'  pr={{ base: '8', md: '8' }}>
                <AccordionCategory category={category} />
                <FilterProductCategory />
              </Box>
              <Box flex='7'>Content on the right (70%)</Box>
            </>
          )}
        </Flex>
      </Box>
    </DefaultLayout>
  )
}
