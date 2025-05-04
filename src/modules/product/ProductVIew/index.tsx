import { type Variant } from "../../../graphql/generated/graphql";
// import { Show } from "solid-js";
import ProductCarousel from "../ProductCarousel";
import ProductSidebar from "../ProductSidebar/Sidebar";

interface ProductViewProps {
  product: Variant | undefined;
}

const ProductView = (props: ProductViewProps) => {
  const product = props.product as Variant;
  return (
    <div class="flex h-full w-screen px-4 md:px-8 lg:px-16">
      <ProductCarousel product={product} />
      <ProductSidebar product={product} />
    </div>
  );
};

export default ProductView;
