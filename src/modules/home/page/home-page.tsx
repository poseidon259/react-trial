import { Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SlickSlider } from '~/components/slick/slick-slider'
import { DefaultLayout } from '~/layouts'
import axiosClient from '~/libs/axios/axiosClient'

export const HomePage = () => {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosClient.get('/banner/list').then((res) => {
      setBanners(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <DefaultLayout>
        {isLoading ? (
          <Flex justifyContent='center' alignItems='center'>
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
          </Flex>
        ) : (
          <SlickSlider banners={banners} />
        )}
      </DefaultLayout>
    </>
  )
}
