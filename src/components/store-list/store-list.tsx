import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StoreCard } from './store-card'
import { Box, Icon, Text } from '@chakra-ui/react'
import { GrNext, GrPrevious } from 'react-icons/gr'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
    aria-hidden='true'
    aria-disabled={currentSlide === 0 ? true : false}
    type='button'
  >
    <Text className={'prevArrow-class'}>
      <Icon as={GrPrevious} />
    </Text>
  </button>
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <button
    {...props}
    className={'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')}
    aria-hidden='true'
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type='button'
  >
    <Text className={'nextArrow-class'}>
      <Icon as={GrNext} />
    </Text>
  </button>
)

export const StoreList = (props: any) => {
  const { images } = props
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />
  }

  return (
    <Box py={{ base: '8', md: '8' }}>
      <Box>
        <Text fontSize='xl' fontWeight='bold'>
          Cửa hàng mới
        </Text>
      </Box>
      <Slider {...settings}>
        {images.map((image: any) => (
          <StoreCard key={image.id} image={image} />
        ))}
      </Slider>
    </Box>
  )
}
