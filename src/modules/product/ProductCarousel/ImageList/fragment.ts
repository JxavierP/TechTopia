import { graphql } from "../../../../graphql/client";

const ImageListFragment = graphql(`
  fragment ImageListFragment on Variant {
    colors(first: 1) {
      images {
        url
        fileName
      }
    }
  }
`);

export default ImageListFragment;
