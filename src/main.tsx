import { RouterProvider, createRouter } from "@tanstack/solid-router";
import { render } from "solid-js/web";

import { routeTree } from "./routeTree.gen";
import "./styles.css";
import { QueryClientProvider } from "@tanstack/solid-query";
import { CarouselProdivder } from "./modules/product/Store";
import 'solid-devtools';
import { queryClient } from "./utils/queryClient";


const router = createRouter({
  routeTree,
  context: {
    showSubHeader: true,
  },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultPreloadStaleTime: 30,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <CarouselProdivder>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CarouselProdivder>
  );
}

const rootElement = document.getElementById("app");
if (rootElement) {
  render(() => <App />, rootElement);
}
