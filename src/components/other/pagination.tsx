import { Button, Flex, Icon } from '@chakra-ui/react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Pagination = (props: any) => {
  const { currentPage, lastPage, onPageChange } = props
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  const handleClickPrev = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1)
    }
  }

  const handleClickNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1)
    }
  }

  const handleClickPage = (pageNumber: any) => {
    onPageChange(pageNumber)
  }

  const renderNumberedButtons = () => {
    const numberedButtons = []

    for (let i = 1; i <= lastPage; i++) {
      numberedButtons.push(
        <Button
          key={i}
          size={'sm'}
          variant={i === currentPage ? 'solid' : 'outline'}
          onClick={() => handleClickPage(i)}
          mx={1}
        >
          {i}
        </Button>
      )
    }

    return numberedButtons
  }

  return (
    <Flex align={'center'} justify={'center'} mt={4} pb={'20px'}>
      <Button size={'sm'} variant={'outline'} onClick={handleClickPrev} mr={2} isDisabled={isFirstPage}>
        <Icon as={BsArrowLeft} />
      </Button>
      {renderNumberedButtons()}
      <Button size={'sm'} variant={'outline'} onClick={handleClickNext} ml={2} isDisabled={isLastPage}>
        <Icon as={BsArrowRight} />
      </Button>
    </Flex>
  )
}
