import ProductCardFragment from "../modules/product/ProductCard/fragment";
import ProductViewerFragment from "../modules/product/ProductVIew/fragment";
import { graphql } from "./client";

export const AllSearchableProductsQuery = graphql(
  `
    query FetchAllSearchableProducts {
      variants(where: { searchable: true }) {
        ...ProductCardFragment
      }
    }
  `,
  [ProductCardFragment],
);

export const AllBrandsQuery = graphql(`
  query FetchAllBrands {
    brands {
      id
      name
    }
  }
`);

export const ProductBySlugQuery = graphql(
  `
    query FetchProductBySlug($slug: String!) {
      variant(where: { slug: $slug }) {
        ...ProductViewerFragment
      }
    }
  `,
  [ProductViewerFragment],
);

export const ProductsByTagQuery = graphql(
  `
    query FetchProductsByTag($tag: String!) {
      variants(where: { product: { tags_every: { name: $tag } }, searchable: true }) {
        ...ProductCardFragment
      }
    }
  `,
  [ProductCardFragment],
);
