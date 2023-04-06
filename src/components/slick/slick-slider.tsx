import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AspectRatio, Box, Image } from '@chakra-ui/react'

export const SlickSlider = (props: any) => {
  const { banners } = props
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <>
      <Slider {...settings}>
        {banners.map((banner: any) => (
          <Box key={banner.id} w='100%' pb={{ base: '12', md: '16' }}>
            <AspectRatio ratio={32 / 12}>
              <Image src={banner.image} objectFit='cover' w='100%' h='100%' />
            </AspectRatio>
          </Box>
        ))}
      </Slider>
    </>
  )
}
