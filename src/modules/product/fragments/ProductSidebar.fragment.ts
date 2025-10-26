import { graphql } from "../../../graphql/client";
import { ColorSelectorFragment, ModelSelectorFragment } from "./VariantSelector.fragment";

const ProductSidebarFragment = graphql(`
  fragment ProductSidebarFragment on Variant {
    id
    name
    slug
    price
    colors {
      ...ColorSelectorFragment
    }
    product {
      id
      name
      description
      brand {
        name
      }
      variants {
        ...ModelSelectorFragment
      }
    }
  }
`, [ModelSelectorFragment, ColorSelectorFragment])

export default ProductSidebarFragment;