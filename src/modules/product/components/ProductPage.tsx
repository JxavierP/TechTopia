import type { FragmentOf } from "gql.tada"
import type { CarouselViewFragment } from "../fragments/ProductCarousel.fragment"
import type ProductSidebarFragment from "../fragments/ProductSidebar.fragment";
import ProductCarousel from "./ProductCarousel";
import ProductSidebar from "./ProductSidebar";

interface ProductPageProps {
  carouselProduct: FragmentOf<typeof CarouselViewFragment>;
  sidebarProduct: FragmentOf<typeof ProductSidebarFragment>;
}
const ProductPage = (props: ProductPageProps) => {
  return (
    <div class="flex h-full w-screen px-4 md:px-8 lg:px-16">
      <ProductCarousel data={props.carouselProduct} />
      <ProductSidebar data={props.sidebarProduct} />
    </div>
  );
};

export default ProductPage;