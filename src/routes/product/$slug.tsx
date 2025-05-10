import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { queryClient } from "../../main";
import { client } from "../../graphql/client";
import {
  FetchProductBySlugDocument,
  type FetchProductBySlugQuery,
  type Variant,
} from "../../graphql/generated/graphql";
import ProductView from "../../modules/product/ProductVIew";
import { setStore as productStore } from "../../modules/product/Store";

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
  const product = data().variant as Variant;
  if (product) {
    productStore({
      viewerImage: product.colors[0].images[0].url,
      imageList: { id: product.colors[0].id, list: product.colors[0].images },
    });
  }
  return <ProductView product={product} />;
}
