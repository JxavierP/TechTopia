import { graphql } from "../../../graphql/client";

export const ColorSelectorFragment = graphql(`
  fragment ColorSelectorFragment on ColorOption @_unmask {
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
  fragment ModelSelectorFragment on Variant @_unmask {
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

const ProductSidebarFragment = graphql(
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

export default ProductSidebarFragment;
