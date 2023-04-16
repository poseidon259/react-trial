
import { ProductCategory } from '../product-category/product-category'

export const StoreProductList = (props: any) => {
  const {
    products,
    options,
    sortPrice,
    popular,
    max,
    newest,
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
      <ProductCategory
        products={products}
        options={options}
        popular={popular}
        newest={newest}
        max={max}
        sortPrice={sortPrice}
        onSortPriceChangeCallback={handleSortPrice}
        handlePopularCallback={handlePopular}
        handleNewestCallback={handleNewest}
      />
    </>
  )
}
