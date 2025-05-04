import { Outlet, createRootRouteWithContext, useMatchRoute } from "@tanstack/solid-router";
import Header from "../modules/ui/Header";
import SubHeader from "../modules/ui/SubHeader";
import { Route as ProductSlugRoute } from "./product/$slug";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
// import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

export const Route = createRootRouteWithContext()({
  component: RootComponent,
});

function RootComponent() {
  const matchRoute = useMatchRoute();
  const isProductSlugRoute = matchRoute({ to: ProductSlugRoute.id });
  return (
    <div class="flex h-screen flex-col overflow-hidden bg-[#f6f6f6] font-lato">
      <Header />
      <div class="flex h-full flex-col items-center overflow-y-auto">
        {!isProductSlugRoute() && <SubHeader />}
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
