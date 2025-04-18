import { Outlet, createRootRouteWithContext } from "@tanstack/solid-router";
import Header from "../modules/ui/Header";
import SubHeader from "../modules/ui/SubHeader";
// import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

export const Route = createRootRouteWithContext()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div class="flex h-screen flex-col overflow-hidden bg-[#f6f6f6]">
      <Header />
      <div class="flex flex-col items-center overflow-y-auto">
        <SubHeader />
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
