import { graphql } from "../../../graphql/client";

export const CategoryBySlugQuery = graphql(`
  query FetchCategoryBySlug($slug: String!) {
    category(where: { slug: $slug }) {
      name
    }
  }
`);
