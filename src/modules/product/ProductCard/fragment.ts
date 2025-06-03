import { graphql } from "../../../graphql/client";

const ProductCardFragment = graphql(`
  fragment ProductCardFragment on Variant {
    id
    name
    slug
    price
    product {
      id
      name
      brand {
        name
      }
    }
    colors {
      id
      name
      slug
      images {
        url
        fileName
      }
    }
    sizes {
      value
    }
  }
`);

export default ProductCardFragment;
