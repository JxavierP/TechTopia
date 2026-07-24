import { queryOptions } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { CategoryBySlugQuery } from "../../modules/catalog/queries/fetchCategoryBySlug";
import { client } from "../../graphql/client";
import { queryClient } from "../../utils/queryClient";

const categoryQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["category", slug],
    queryFn: async () => {
      return await client.request(CategoryBySlugQuery, { slug: slug });
    },
  });

export const Route = createFileRoute("/shop/$slug")({
  component: RouteComponent,
  loader: async ({ params: { slug } }) => {
    return queryClient.ensureQueryData(categoryQueryOptions(slug));
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const category = data().category!.name;
  console.log(category);
  return <div>Hello {category}</div>;
}
