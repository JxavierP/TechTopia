import { graphql } from "../../../../graphql/client";

const ImageViewerFragment = graphql(`
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

export default ImageViewerFragment;
