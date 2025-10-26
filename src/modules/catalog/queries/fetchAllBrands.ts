import { graphql } from "../../../graphql/client";

export const AllBrandsQuery = graphql(`
  query FetchAllBrands {
    brands {
      id
      name
    }
  }
`);