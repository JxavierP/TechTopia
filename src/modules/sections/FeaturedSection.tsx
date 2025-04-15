import { useQuery } from "@tanstack/solid-query";
import ProductCard from "../product/Card";
import { createEffect, For, Show, Switch, Match } from "solid-js";
import { client } from "../../graphql/client";
import {
	FetchAllSearchableProductsDocument,
	ProductCardFieldsFragmentDoc,
	type FetchAllSearchableProductsQuery,
	type ProductCardFieldsFragment,
} from "../../graphql/generated/graphql";
import { useFragment } from "../../graphql/generated";

interface FeaturedSectionProps {
	tag: string;
}

const FeaturedSection = (props: FeaturedSectionProps) => {
	const productQuery = useQuery(() => ({
		queryKey: ["productsByTag", props.tag],
		queryFn: async () => {
			return await client.request<FetchAllSearchableProductsQuery>(
				FetchAllSearchableProductsDocument,
				{ tag: props.tag },
			);
		},
		// staleTime: 5 * 60 * 1000,
	}));

	if (import.meta.env.DEV) {
		createEffect(() => {
			console.log("FeaturedSection Query State:", {
				tag: props.tag,
				status: productQuery.status,
				isFetching: productQuery.isFetching,
				error: productQuery.error,
				dataUpdatedAt: productQuery.dataUpdatedAt,
			});
		});
	}

	return (
		<section class="flex w-full flex-col justify-start px-4 md:px-8 lg:px-16">
			<span class="my-3 font-lato text-2xl font-semibold">Featured This Month</span>

			<Switch fallback={<div>Something went wrong.</div>}>
				<Match when={productQuery.isLoading}>
					<ul class="scrollbar-hide flex gap-x-8 overflow-x-auto">
						<For each={Array(4)}>{() => <ProductCard product={null} loading={true} />}</For>
					</ul>
				</Match>

				<Match when={productQuery.isError}>
					<div class="my-4 rounded border border-red-400 bg-red-100 p-4 text-red-700">
						<p>Could not load featured products.</p>
					</div>
				</Match>

				<Match when={productQuery.isSuccess}>
					<Show
						when={productQuery.data?.variants && productQuery.data.variants.length > 0}
						fallback={<p class="my-4 text-gray-500">No featured products found for this month.</p>}
					>
						<ul class="scrollbar-hide flex gap-x-8 overflow-x-auto">
							<For each={productQuery.data?.variants}>
								{(variant) => {
									const product = useFragment(ProductCardFieldsFragmentDoc, variant);
									return <ProductCard product={product} />;
								}}
							</For>
						</ul>
					</Show>
				</Match>
			</Switch>
		</section>
	);
};

export default FeaturedSection;
