import { graphql } from "../../../graphql/client";

export const ColorSelectorFragment = graphql(`
  fragment ColorSelectorFragment on ColorOption {
    id
    name
    slug
    images {
      url
      fileName
    }
  }
`);

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
`);

export const ProductSidebarFragment = graphql(
  `
    fragment ProductSidebarFragment on Variant {
      id
      name
      slug
      price
      colors {
        ...ColorSelectorFragment
      }
      sizes {
        value
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
  `,
  [ModelSelectorFragment, ColorSelectorFragment],
);
