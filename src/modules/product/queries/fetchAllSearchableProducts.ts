import { graphql } from "../../../graphql/client";
import { ProductCardFragment } from "../fragments/ProductCard.fragment";

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