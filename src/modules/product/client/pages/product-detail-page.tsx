import { useParams } from "react-router";
import { ProductDetail } from "~/components/product-detail/product-detail"

export const ProductDetailPage = () => {
    const { id } = useParams();
    return (
        <>
            <ProductDetail />
        </>
    )
}