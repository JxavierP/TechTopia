import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { queryClient } from "../../main";
import { client } from "../../graphql/client";
import {
  FetchProductBySlugDocument,
  type FetchProductBySlugQuery,
  type ProductSidebarFieldsFragment,
} from "../../graphql/generated/graphql";

const productQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["product", slug],
    queryFn: async () => {
      return await client.request<FetchProductBySlugQuery>(FetchProductBySlugDocument, {
        slug: slug,
      });
    },
  });

export const Route = createFileRoute("/product/$slug")({
  component: RouteComponent,
  loader: async ({ params: { slug } }) => {
    return queryClient.ensureQueryData(productQueryOptions(slug));
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const product = data().variant as ProductSidebarFieldsFragment;
  console.log(product);
  return <div>Hello {product.name}</div>;
}
