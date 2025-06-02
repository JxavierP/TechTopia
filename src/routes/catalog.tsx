import { createFileRoute } from "@tanstack/solid-router";
import { client } from "../graphql/client";
import { queryOptions } from "@tanstack/solid-query";
import { queryClient } from "../main";
import { CatalogContent, CatalogSidebar } from "../modules/catalog";
import { AllBrandsQuery, AllSearchableProductsQuery } from "../graphql/queries";

const searchableProductQueryOptions = () =>
  queryOptions({
    queryKey: ["catalogProducts"],
    queryFn: async () => {
      return await client.request(AllSearchableProductsQuery);
    },
  });

const brandsQueryOptions = () =>
  queryOptions({
    queryKey: ["brands"],
    queryFn: async () => {
      return await client.request(AllBrandsQuery);
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
  return (
    <div class="flex h-full w-full space-x-16 px-4 md:px-8 lg:px-16">
      <CatalogSidebar data={data().brandsData} />
      <CatalogContent products={data().productsData.variants} />
    </div>
  );
}
