export const getPrice = (salePrice: number, originPrice: number) => {
    return salePrice ? salePrice : originPrice;
};