import { readFragment, type FragmentOf } from "gql.tada";
import { store as productStore } from "../../Store";
import ImageViewerFragment from "./fragment";

const ImageViewer = (props: { data: FragmentOf<typeof ImageViewerFragment> }) => {
  const product = readFragment(ImageViewerFragment, props.data);
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
