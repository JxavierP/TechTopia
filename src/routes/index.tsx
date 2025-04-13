import { createFileRoute } from "@tanstack/solid-router";
import ProductCard from "../components/Product/Card";
import { client } from "../graphql/client";
import { useQuery } from "@tanstack/solid-query";
import { FetchAllBrandsDocument, type FetchAllBrandsQuery } from "../graphql/generated/graphql";
import { createEffect } from "solid-js";

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

	// Use createEffect to reactively log state changes
	createEffect(() => {
		// Read the signals inside the effect to make them dependencies
		const loading = testQuery.isLoading;
		const err = testQuery.error;
		const resultData = testQuery.data; // Access data signal

		console.log("Effect running - Current state:", {
			loading,
			hasError: !!err,
			hasData: !!resultData,
		});

		if (loading) {
			console.log("Effect: loading", loading);
		} else if (err) {
			console.log("Effect: error", err);
		} else {
			// Ensure data is not undefined/null before accessing properties
			if (resultData) {
				console.log(
					"Effect: data",
					resultData.brands.map((brand) => brand.name),
				);
			} else {
				console.log("Effect: data is null/undefined after loading finished without error");
			}
		}
	});
	return (
		<>
			<section class="flex w-full flex-col justify-start px-16">
				<span class="font-semibol my-3 font-lato text-2xl">Featured This Month</span>
				<ul class="scrollbar-hide flex gap-x-8 overflow-x-auto">
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</ul>
			</section>
		</>
	);
}
