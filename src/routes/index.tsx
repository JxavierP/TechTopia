import { createFileRoute } from "@tanstack/solid-router";
import ProductCard from "../components/Product/Card";
import { client } from "../graphql/client";
import { gql } from "graphql-request";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const query = gql`
		query FetchAllBrands {
			brands {
				id
				name
			}
		}
	`;
	client.request(query).then((data) => console.log(data));
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
