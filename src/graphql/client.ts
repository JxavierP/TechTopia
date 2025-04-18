import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(import.meta.env.VITE_HYGRAPH_API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_AUTH_TOKEN}`,
  },
});
