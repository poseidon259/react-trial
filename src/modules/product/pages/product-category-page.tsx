import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Pagination } from '~/components/other/pagination'
import { AccordionCategory } from '~/components/product-category/accordion-category'
import { FilterProductCategory } from '~/components/product-category/filter-product-category'
import { ProductCategory } from '~/components/product-category/product-category'
import { SlickSlider } from '~/components/slick/slick-slider'
import { FALSE, LIMIT_PER_PAGE_PRODUCT_CATEGORY, TRUE } from '~/configs'
import { useCustomToast } from '~/hooks'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'
import { navigationFn } from '~/routes'

export const ProductCategoryPage = () => {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [categoryChild, setCategoryChild] = useState(null)
  const [banners, setBanners] = useState([])
  const [isLoadingBanner, setIsLoadingBanner] = useState(true)
  const [isLoadingCategory, setIsLoadingCategory] = useState(true)

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const [sortPrice, setSortPrice] = useState('')
  const [popular, setPopular] = useState(FALSE)
  const [newest, setNewest] = useState(TRUE)
  const [rating, setRating] = useState(null)

  const options = [
    { label: 'Tăng dần', value: 'asc' },
    { label: 'Giảm dần', value: 'desc' }
  ]
  const max = 3;

  const [priceRange, setPriceRange] = useState([1000, 10000])
  const [dateStart, setDateStart] = useState(null)
  const [dateEnd, setDateEnd] = useState(null)

  const range = [1, 50000]

  const [isLoadingProductCategory, setIsLoadingProductCategory] = useState(true)
  const limit = LIMIT_PER_PAGE_PRODUCT_CATEGORY

  const navigate = useNavigate()
  const { toastError } = useCustomToast()

  const handleFilterRating = (value: any) => {
    setRating(value);
  };

  const handlePriceRange = (newValues: number[]) => {
    setPriceRange(newValues)
  }

  const handleDateStart = (date: any) => {
    setDateStart(date)
  }

  const handleDateEnd = (date: any) => {
    setDateEnd(date)
  }

  const handleSubCategory = (id: any) => {
    if (id === categoryChild) {
      setCategoryChild(null)
    } else {
      setCategoryChild(id)
    }
  }

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
          limit: limit,
          sort_price: sortPrice,
          popular: popular,
          newest: newest,
          category_child: categoryChild,
          price_start: priceRange[0],
          price_end: priceRange[1],
          date_start: dateStart,
          date_end: dateEnd,
          rating: rating
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
  }, [currentPage, limit, popular, newest, sortPrice, categoryChild, priceRange, dateStart, dateEnd, rating])

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
                  <AccordionCategory
                    category={category}
                    categoryChild={categoryChild}
                    handleSubCategoryCallback={handleSubCategory}
                  />
                  <FilterProductCategory
                    handlePriceRangeCallback={handlePriceRange}
                    handleDateStartCallback={handleDateStart}
                    handleDateEndCallback={handleDateEnd}
                    handleFilterRatingCallback={handleFilterRating}
                    rating={rating}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    priceRange={priceRange}
                    range={range}
                  />
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
                  <ProductCategory
                    products={products}
                    options={options}
                    popular={popular}
                    newest={newest}
                    sortPrice={sortPrice}
                    max={max}
                    onSortPriceChangeCallback={onSortPriceChange}
                    handlePopularCallback={handlePopular}
                    handleNewestCallback={handleNewest}
                  />
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
