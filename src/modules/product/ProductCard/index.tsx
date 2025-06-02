import formatter from "../../../utils/currency-formatter";
import { PlusIcon } from "../../ui/Icons";
import { Link } from "@tanstack/solid-router";
import { store as productStore } from "../Store";
import { store as cartStore } from "../../cart/CartStore";
import { readFragment, type FragmentOf } from "gql.tada";
import { ProductCardFragment } from "./Card.fragment";

interface ProductCardProps {
  product: FragmentOf<typeof ProductCardFragment> | null;
  loading?: boolean;
}

function handleProductClick(data: FragmentOf<typeof ProductCardFragment>) {
  const product = readFragment(ProductCardFragment, data);
  productStore.viewerImage = product.colors[0].images[0].url;
  productStore.imageList = { id: product.id, list: product.colors[0].images };
  console.log("Product clicked:", product.name);
}

const ProductCard = (props: ProductCardProps) => {
  const product = readFragment(ProductCardFragment, props.product);
  console.log("Cart Store:", cartStore);
  if (props.loading || !product) {
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
      class="group flex h-full w-full max-w-44 flex-shrink-0 cursor-pointer flex-col lg:max-w-3xs"
    >
      <Link to="/product/$slug" preload="intent" params={{ slug: product.slug }}>
        <div
          aria-label="ProductCard_image_container"
          class="relative mb-1 flex h-54 w-full items-center justify-center overflow-hidden rounded-xl border-2 border-transparent bg-white shadow-xl transition-transform duration-200 ease-linear group-hover:border-green-600 active:scale-95 lg:h-80"
        >
          <button
            class="group/button absolute top-3 right-3 z-10 rounded-md border-2 border-gray-300 p-0.5 transition-transform duration-100 ease-in hover:border-transparent hover:bg-green-600 active:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              cartStore.addToCart({
                id: product.id,
                name: product.product!.name,
                image: product.colors[0].images[0].url,
                price: product.price,
                quantity: 1,
                selectedOptions: [
                  { type: "Color", value: product.colors[0].name! },
                  { type: "Model", value: product.name },
                ],
              });
              console.log("Added to cart:", product.product!.name);
            }}
          >
            <PlusIcon class="h-5 w-5 stroke-current text-gray-900 group-hover/button:text-white" />
          </button>
          <img
            src={product.colors[0].images[0].url}
            alt={product.colors[0].images[0].fileName}
            class="block max-h-40 max-w-full lg:max-h-63"
            loading="lazy"
          />
        </div>
        <div aria-label="ProductCard_details_container" class="link-underline flex flex-col">
          <span class="font-sans text-sm font-semibold text-green-600">
            {product.product?.brand?.name}
          </span>
          <p class="truncate font-sans text-base font-semibold text-[#131416]">{product.name}</p>
          <p class="font-bebas text-3xl text-[#131416]">{formatter.format(product.price)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
