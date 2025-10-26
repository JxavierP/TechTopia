import { graphql } from "../../../graphql/client";
import ProductPageFragment from "../fragments/ProductPage.fragment";

const ProductBySlugQuery = graphql(`
  query FetchProductBySlugQuery($slug: String!) {
    variant(where: {slug: $slug}) {
      ...ProductPageFragment
    }
  }
`, [ProductPageFragment])

export default ProductBySlugQuery;