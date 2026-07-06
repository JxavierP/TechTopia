import { Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/solid-router";
import Header from "../modules/ui/Header";
import SubHeader from "../modules/ui/SubHeader";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export interface RootRouterContext {
  showSubHeader: boolean;
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const matches = useRouterState({ select: (s) => s.matches[s.matches.length - 1] });
  const showSubHeader = () => matches().context.showSubHeader ?? true;
  return (
    <div class="flex h-screen flex-col overflow-hidden bg-[#f6f6f6] font-lato">
      <Header />
      <div class="flex h-full flex-col items-center overflow-y-auto">
        {showSubHeader() && <SubHeader />}
        <Outlet />
      </div>
      {/*<TanStackRouterDevtools />*/}
    </div>
  );
}
