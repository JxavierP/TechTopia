import type { Variant } from "../../../graphql/generated/graphql";
import ImageList from "./ImageList";
import ImageViewer from "./ImageViewer";

interface ProductCarouselProps {
  product: Variant;
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
