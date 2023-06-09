import { Text } from '@chakra-ui/react'
import { SortProductCategory } from './sort-product-category'
import { ProductCategoryList } from './product-category-list'

export const ProductCategory = (props: any) => {
  const {
    products,
    options,
    sortPrice,
    popular,
    newest,
    max,
    onSortPriceChangeCallback,
    handleNewestCallback,
    handlePopularCallback
  } = props

  const handlePopular = () => {
    handlePopularCallback()
  }

  const handleNewest = () => {
    handleNewestCallback()
  }

  const handleSortPrice = (value: any) => {
    onSortPriceChangeCallback(value)
  }

  return (
    <>
      <SortProductCategory
        popular={popular}
        newest={newest}
        options={options}
        sortPrice={sortPrice}
        handlePopularCallback={handlePopular}
        handleNewestCallback={handleNewest}
        handleChangeCallback={handleSortPrice}
      />
      {products.length > 0 ? (
        <ProductCategoryList products={products} max={max} />
      ) : (
        <Text textAlign={'center'} py={{ base: '8', md: '8' }}>
          Không tồn tại sản phẩm
        </Text>
      )}
    </>
  )
}
