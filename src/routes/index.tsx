import { createFileRoute } from "@tanstack/solid-router";
import ProductCard from "../components/Product/Card";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<section class="flex w-full flex-col justify-start px-16">
				<span class="font-semibol my-3 font-lato text-2xl">Featured This Month</span>
				<ul class="scrollbar-hide flex gap-x-8 overflow-x-auto">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</ul>
			</section>
		</>
	);
}
