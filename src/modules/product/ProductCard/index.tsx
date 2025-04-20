import { type Component } from "solid-js";
import type { ProductCardFieldsFragment } from "../../../graphql/generated/graphql";
import formatter from "../../../utils/currency-formatter";
import { PlusIcon } from "../../ui/Icons";
import { Link } from "@tanstack/solid-router";
import { store as productStore } from "../Store";

interface ProductCardProps {
  product: ProductCardFieldsFragment | null;
  loading?: boolean;
}

function handleProductClick(product: ProductCardFieldsFragment) {
  productStore.viewerImage = product.colors[0].images[0].url;
  productStore.imageList = { id: product.id, list: product.colors[0].images };
  console.log("Product clicked:", product.name);
}

const ProductCard: Component<ProductCardProps> = (props) => {
  if (props.loading || !props.product) {
    return (
      <li
        aria-label="ProductCard_container_loading"
        class="flex w-3xs flex-shrink-0 animate-pulse flex-col"
      >
        <div class="mb-1 h-80 rounded-xl bg-gray-200"></div>
        <div class="mt-2 flex flex-col space-y-2">
          <div class="h-4 w-1/4 rounded bg-gray-200"></div>
          <div class="h-5 w-3/4 rounded bg-gray-200"></div>
          <div class="h-8 w-1/2 rounded bg-gray-200"></div>
        </div>
      </li>
    );
  }

  return (
    <li
      on:click={() => handleProductClick(props.product!)}
      aria-label="ProductCard_container"
      class="group flex h-max w-3xs flex-shrink-0 cursor-pointer flex-col"
    >
      <Link to="/product/$slug" preload="intent" params={{ slug: props.product.slug }}>
        <div
          aria-label="ProductCard_image_container"
          class="relative mb-1 flex h-80 w-full items-center justify-center overflow-hidden rounded-xl border-2 border-transparent bg-white shadow-xl transition-transform duration-200 ease-linear group-hover:border-indigo-600 active:scale-95"
        >
          <button class="absolute top-3 right-3 rounded-md border-2 border-gray-300 p-0.5 transition-transform duration-100 ease-in hover:border-transparent hover:bg-indigo-600 active:scale-105">
            <PlusIcon class="h-5 w-5 hover:stroke-white" />
          </button>
          <img
            src={props.product.colors[0].images[0].url}
            alt={props.product.colors[0].images[0].fileName}
            class="block max-h-63 max-w-full"
            loading="lazy"
          />
        </div>
        <div aria-label="ProductCard_details_container" class="link-underline flex flex-col">
          <span class="font-sans text-sm font-semibold text-indigo-600">
            {props.product.product?.brand?.name}
          </span>
          <p class="truncate font-sans text-base font-semibold text-[#131416]">
            {props.product.name}
          </p>
          <p class="font-bebas text-3xl text-[#131416]">{formatter.format(props.product.price)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
