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
      {/* <Show
        when={product}
        fallback={<p class="my-4 text-gray-500">No product found with this slug.</p>}
      >
        {(product) => <p class="text-white">{product().name}</p>}
      </Show> */}
    </div>
  );
};

export default ProductView;
