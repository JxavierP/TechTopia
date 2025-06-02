import { graphql } from "../../../../graphql/client";

export const ImageViewerFragment = graphql(`
  fragment ImageViewerFragment on Variant {
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
`);
