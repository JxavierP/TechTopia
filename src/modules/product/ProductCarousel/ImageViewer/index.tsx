import { readFragment, type FragmentOf } from "gql.tada";
import { store as productStore } from "../../Store";
import { ImageViewerFragment } from "./imageviewer.fragment";

interface ImageViewerProps {
  product: FragmentOf<typeof ImageViewerFragment>;
}

const ImageViewer = (props: ImageViewerProps) => {
  const product = readFragment(ImageViewerFragment, props.product);
  return (
    <div class="flex h-full w-full items-center justify-center bg-white">
      <div class="relative flex h-[80%] w-[80%] items-center justify-center">
        <img
          src={productStore.viewerImage}
          alt={product.product?.name + " by " + product.product?.brand?.name}
          class="h-auto max-h-full max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
