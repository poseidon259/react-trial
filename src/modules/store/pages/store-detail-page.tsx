import { useState } from "react";
import { useParams } from "react-router";

export const StoreDetailPage = () => {
    const { id } = useParams();
    const [store, setStore] = useState(null);
    const [isLoadingStoreDetail, setIsLoadingStoreDetail] = useState(true);

    return (
        <>123</>
    )
}