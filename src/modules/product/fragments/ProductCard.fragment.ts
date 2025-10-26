import { graphql } from "../../../graphql/client";

export const ProductCardFragment = graphql(`
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
    colors(first: 1) {
      id
      name
      slug
      images(first: 1) {
        url
        fileName
      }
    }
  }
`);
