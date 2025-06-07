import ProductCarousel from "../ProductCarousel";
import type ImageViewerFragment from "../ProductCarousel/ImageViewer/fragment";
import ProductSidebar from "../ProductSidebar/Sidebar";
import type { FragmentOf } from "gql.tada";
import type ProductSidebarFragment from "../ProductSidebar/Sidebar.fragment";

interface ProductViewProps {
  carouselProduct: FragmentOf<typeof ImageViewerFragment>;
  sidebarProduct: FragmentOf<typeof ProductSidebarFragment>;
}

const ProductView = (props: ProductViewProps) => {
  return (
    <div class="flex h-full w-screen px-4 md:px-8 lg:px-16">
      <ProductCarousel data={props.carouselProduct} />
      <ProductSidebar product={props.sidebarProduct} />
    </div>
  );
};

export default ProductView;
