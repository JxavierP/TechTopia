import { graphql } from "../../../graphql/client";
import ImageViewerFragment from "../ProductCarousel/ImageViewer/fragment";
import ProductSidebarFragment from "../ProductSidebar/Sidebar.fragment";

const ProductViewerFragment = graphql(
  `
    fragment ProductViewerFragment on Variant {
      ...ImageViewerFragment
      ...ProductSidebarFragment
    }
  `,
  [ImageViewerFragment, ProductSidebarFragment],
);

export default ProductViewerFragment;
