import { For } from "solid-js";
import ProductCardFragment from "../../product/ProductCard/fragment";
import type { FragmentOf } from "gql.tada";
import ProductCard from "../../product/ProductCard";

const CatalogContent = (props: { products: FragmentOf<typeof ProductCardFragment>[] }) => {
  return (
    <div class="flex h-full w-full flex-col p-2">
      <header class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-4xl font-semibold text-green-600 uppercase">Catalog</span>
          <span class="text-sm text-gray-700">Currently Showing - All Products</span>
        </div>
        <div class="flex space-x-5">
          <button class="w-32 rounded-lg border-2 border-green-600 py-2 hover:bg-green-500 hover:text-white active:bg-green-600">
            Price
          </button>
          <button class="w-32 rounded-lg border-2 border-green-600 py-2 hover:bg-green-500 hover:text-white active:bg-green-600">
            Sort By
          </button>
        </div>
      </header>
      <div class="my-2 flex space-x-4">
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
        <span class="flex items-center rounded-lg bg-white px-4 py-3">
          $100-$500
          <button class="ml-2">{/* <XIcon class="h-4 w-4" /> */}</button>
        </span>
      </div>
      <main class="my-4 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        <For each={props.products} fallback={<div>Loading...</div>}>
          {(product) => <ProductCard product={product!} />}
        </For>
      </main>
    </div>
  );
};

export default CatalogContent;
