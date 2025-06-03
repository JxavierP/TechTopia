import type { FragmentOf } from "gql.tada";
import ImageList from "./ImageList";
import ImageViewer from "./ImageViewer";
import ImageViewerFragment from "./ImageViewer/fragment";

const ProductCarousel = (props: { data: FragmentOf<typeof ImageViewerFragment> }) => {
  const product = props.data;
  return (
    <div class="sticky flex w-2/3">
      <ImageList />
      <ImageViewer data={product} />
    </div>
  );
};

export default ProductCarousel;
