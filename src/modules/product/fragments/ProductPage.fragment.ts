import { graphql } from "../../../graphql/client";
import { CarouselViewFragment } from "./ProductCarousel.fragment";
import ProductSidebarFragment from "./ProductSidebar.fragment";

const ProductPageFragment = graphql(`
  fragment ProductPageFragment on Variant {
    ...CarouselViewFragment
    ...ProductSidebarFragment
  }
`,
  [CarouselViewFragment, ProductSidebarFragment]
)

export default ProductPageFragment;