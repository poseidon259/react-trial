import { SimpleGrid } from '@chakra-ui/react'
import { useMemo } from 'react'

export const ProductGrid = (props: any) => {
  const { max } = props
  const columns = useMemo(() => {
    return {
      base: Math.min(1, max - 3 <= 0 ? 1 : max - 3),
      md: Math.min(2, max - 2 <= 0 ? 1 : max - 2),
      lg: Math.min(3, max - 1 <= 0 ? 1 : max - 1),
      xl: Math.min(4, max <= 0 ? 1 : max)
    }
  }, [props.children])

  return <SimpleGrid columns={columns} columnGap={{ base: '4', md: '6' }} rowGap={{ base: '8', md: '10' }} {...props} />
}
