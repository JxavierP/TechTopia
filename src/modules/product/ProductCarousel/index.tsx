import type { FragmentOf } from "gql.tada";
import ImageList from "./ImageList";
import ImageViewer from "./ImageViewer";
import { ImageViewerFragment } from "./ImageViewer/imageviewer.fragment";

interface ProductCarouselProps {
  product: FragmentOf<typeof ImageViewerFragment>;
}

const ProductCarousel = (props: ProductCarouselProps) => {
  const product = props.product;
  return (
    <div class="sticky flex w-2/3">
      <ImageList />
      <ImageViewer product={product} />
    </div>
  );
};

export default ProductCarousel;
