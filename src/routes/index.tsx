import { createFileRoute } from "@tanstack/solid-router";
import ProductCard from "../components/Product/Card";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
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
