import { createFileRoute } from "@tanstack/solid-router";
import CartSummary from "../modules/cart/CartView/CartSummery";
import Checkout from "../modules/cart/CartView/Checkout";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main class="flex h-full w-screen flex-col overflow-x-hidden">
      <section class="mt-4 flex h-full w-full px-4 md:px-8 lg:px-16">
        <CartSummary />
        <Checkout />
      </section>
    </main>
  );
}
