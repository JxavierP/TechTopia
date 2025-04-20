import { createFileRoute } from "@tanstack/solid-router";
import { client } from "../graphql/client";
import {
  type Brand,
  FetchAllBrandsDocument,
  type FetchAllBrandsQuery,
  FetchAllSearchableProductsDocument,
  type FetchAllSearchableProductsQuery,
  type Variant,
} from "../graphql/generated/graphql";
import { queryOptions } from "@tanstack/solid-query";
import { queryClient } from "../main";
import { CatalogContent, CatalogSidebar } from "../modules/catalog";

const searchableProductQueryOptions = () =>
  queryOptions({
    queryKey: ["catalogProducts"],
    queryFn: async () => {
      return await client.request<FetchAllSearchableProductsQuery>(
        FetchAllSearchableProductsDocument,
      );
    },
  });

const brandsQueryOptions = () =>
  queryOptions({
    queryKey: ["brands"],
    queryFn: async () => {
      return await client.request<FetchAllBrandsQuery>(FetchAllBrandsDocument);
    },
  });

export const Route = createFileRoute("/catalog")({
  component: RouteComponent,
  loader: async () => {
    const [productsData, brandsData] = await Promise.all([
      queryClient.ensureQueryData(searchableProductQueryOptions()),
      queryClient.ensureQueryData(brandsQueryOptions()),
    ]);

    return { productsData, brandsData };
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const products = data().productsData.variants as Variant[];
  const brands = data().brandsData.brands as Brand[];
  return (
    <div class="flex h-full w-full space-x-16 px-4 md:px-8 lg:px-16">
      <CatalogSidebar brands={brands} />
      <CatalogContent products={products} />
    </div>
  );
}
