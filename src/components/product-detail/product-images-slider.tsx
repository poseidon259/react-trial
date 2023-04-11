import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AspectRatio, Box, Image } from '@chakra-ui/react'

export const ProductImageSlider = (props: any) => {
  const { images } = props
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
        {images.map((image: any) => (
          <Box key={image.id} w='100%' pb={{ base: '12', md: '16' }}>
            <AspectRatio ratio={4 / 3}>
            <Image src={image.image} objectFit='cover' w='100%' h='100%' />
            </AspectRatio>
          </Box>
        ))}
      </Slider>
    </>
  )
}
