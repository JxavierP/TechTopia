import { Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/solid-router";
import Header from "../modules/ui/Header";
import SubHeader from "../modules/ui/SubHeader";
import { AllCategoriesQuery } from "../modules/ui/queries/fetchAllCategories";
import { queryOptions } from "@tanstack/solid-query";
import { client } from "../graphql/client";
import { queryClient } from "../utils/queryClient";
// import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";

export interface RootRouterContext {
  showSubHeader: boolean;
}

const categoryQueryOptions = () => {
  return queryOptions({
    queryKey: ["categories"],
    queryFn: async () => {
      return await client.request(AllCategoriesQuery);
    },
  });
};

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RootComponent,
  loader: async () => {
    return queryClient.ensureQueryData(categoryQueryOptions());
  },
});

function RootComponent() {
  const matches = useRouterState({ select: (s) => s.matches[s.matches.length - 1] });
  const showSubHeader = () => matches().context.showSubHeader ?? true;
  const data = Route.useLoaderData();

  return (
    <div class="flex h-screen flex-col overflow-hidden bg-[#f6f6f6] font-lato">
      <Header />
      <div class="flex h-full flex-col items-center overflow-y-auto">
        {showSubHeader() && <SubHeader categories={data()} />}
        <Outlet />
      </div>
      {/*<TanStackRouterDevtools />*/}
    </div>
  );
}
