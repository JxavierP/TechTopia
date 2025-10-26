import { graphql } from "../../../graphql/client";

export const ColorSelectorFragment = graphql(`
  fragment ColorSelectorFragment on ColorOption @_unmask{
    id
    name
    slug
    images {
      url
      fileName
    } 
  }
`)

export const ModelSelectorFragment = graphql(`
  fragment ModelSelectorFragment on Variant {
    id
    name
    slug
    price
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
`)