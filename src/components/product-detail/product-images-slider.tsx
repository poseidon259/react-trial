import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AspectRatio, Box, Image, Text } from '@chakra-ui/react'

export const ProductImageSlider = (props: any) => {
  const { images } = props
  const styles = `
  .slick-thumb li {
    margin-top: 10px; 
    width: 100px;
  }
`
  const settings = {
    customPaging: function (index: any) {
      return (
        <Box w={'100px'}>
          <Image src={images[index].image} />
        </Box>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  return (
    <>
      <style>{styles}</style>
      <Slider {...settings}>
        {images.map((image: any) => (
          <Box key={image.id} w='100%'>
            <AspectRatio ratio={4 / 3}>
              <Image src={image.image} objectFit='cover' w='100%' h='100%' />
            </AspectRatio>
          </Box>
        ))}
      </Slider>
    </>
  )
}
