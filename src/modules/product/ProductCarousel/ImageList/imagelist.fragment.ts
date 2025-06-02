import { graphql } from "../../../../graphql/client";

export const ImageListFragment = graphql(`
  fragment ImageListFields on Variant {
    colors(first: 1) {
      images {
        url
        fileName
      }
    }
  }
`);
