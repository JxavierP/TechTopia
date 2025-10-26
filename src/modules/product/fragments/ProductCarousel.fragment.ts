import { graphql } from "../../../graphql/client";

export const CarouselViewFragment = graphql(`
  fragment CarouselViewFragment on Variant {
    name
    colors {
      images {
        url
        fileName
      }
    }
    product {
      name
      brand {
        name
      }
    }
  }
`)

export const CarouselListFragment = graphql(`
  fragment CarouselList on Variant {
    colors(first: 1) {
      images {
        url
        fileName
      }
    }
  }
`)