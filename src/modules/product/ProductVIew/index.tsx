import ProductCarousel from "../ProductCarousel";
import ProductSidebar from "../ProductSidebar/Sidebar";
import { ImageViewerFragment } from "../ProductCarousel/ImageViewer/fragment";
import { ProductSidebarFragment } from "../ProductSidebar/Sidebar.fragment";
import type { FragmentOf } from "gql.tada";

interface ProductViewProps {
  carouselProduct: FragmentOf<typeof ImageViewerFragment>;
  sidebarProduct: FragmentOf<typeof ProductSidebarFragment>;
}

const ProductView = (props: ProductViewProps) => {
  return (
    <div class="flex h-full w-screen px-4 md:px-8 lg:px-16">
      <ProductCarousel product={props.carouselProduct} />
      <ProductSidebar product={props.sidebarProduct} />
    </div>
  );
};

export default ProductView;
