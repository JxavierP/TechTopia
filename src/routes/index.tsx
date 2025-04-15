import { createFileRoute } from "@tanstack/solid-router";
import { client } from "../graphql/client";
import { useQuery } from "@tanstack/solid-query";
import { FetchAllBrandsDocument, type FetchAllBrandsQuery } from "../graphql/generated/graphql";
import { createEffect } from "solid-js";
import FeaturedSection from "../modules/sections/FeaturedSection";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<FeaturedSection tag="featured" />
		</>
	);
}
