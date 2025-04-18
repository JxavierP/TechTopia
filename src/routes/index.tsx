import { createFileRoute } from "@tanstack/solid-router";
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
