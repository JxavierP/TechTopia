import { graphql } from "../../../graphql/client";
import { ImageViewerFragment } from "../ProductCarousel/ImageViewer/imageviewer.fragment";
import { ProductSidebarFragment } from "../ProductSidebar/Sidebar.fragment";

export const ProductViewerFragment = graphql(
  `
    fragment ProductViewerFragment on Variant {
      ...ImageViewerFragment
      ...ProductSidebarFragment
    }
  `,
  [ImageViewerFragment, ProductSidebarFragment],
);
