import { initGraphQLTada } from "gql.tada";
import { GraphQLClient } from "graphql-request";
import type { introspection } from "./graphql-env";

export const client = new GraphQLClient(import.meta.env.VITE_HYGRAPH_API_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_AUTH_TOKEN}`,
  },
});

export const graphql = initGraphQLTada<{ introspection: introspection; }>();
export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
export { readFragment } from "gql.tada";
