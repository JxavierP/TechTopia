import { graphql } from "../../../graphql/client";

export const AllCategoriesQuery = graphql(`
  query FetchAllCategories {
    categories {
      id
      name
      slug
    }
  }
`);
