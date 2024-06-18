import { ProductSection } from "@/components";
import productInfo from "@/data/productInfo.json"

export function generateStaticParams() {
    return [{ productID: 'CT115' }, { productID: 'AIWC80' }, { productID: 'AIP120' }, { productID: 'AIM35' }];
}

const ProductPage = ({ params }) => {
    const productData = productInfo.en[params.productID];
    return (
        <ProductSection productID={params.productID} productData={productData} />
    )
}
export default ProductPage