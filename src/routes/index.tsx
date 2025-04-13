import { createFileRoute } from "@tanstack/solid-router";
import ProductCard from "../components/Product/Card";
import { client } from "../graphql/client";
import { useQuery } from "@tanstack/solid-query";
import { FetchAllBrandsDocument, type FetchAllBrandsQuery } from "../graphql/generated/graphql";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const testQuery = useQuery(() => ({
		queryKey: ["brands"],
		queryFn: async () => {
			return await client.request<FetchAllBrandsQuery>(FetchAllBrandsDocument);
		},
	}));

	const { data, error, isLoading } = testQuery;
	if (isLoading) {
		console.log("loading", isLoading);
	} else if (error) {
		console.log("error", error);
	} else
		console.log(
			"data",
			data?.brands.map((brand) => brand.name),
		);
	return (
		<>
			<section class="flex w-full flex-col justify-start">
				<span class="my-3 font-lato text-2xl font-semibold">Featured This Month</span>
				<ul class="flex gap-x-8">
					<li>
						<ProductCard />
					</li>
					<li>
						<ProductCard />
					</li>
					<li>
						<ProductCard />
					</li>
				</ul>
			</section>
		</>
	);
}
