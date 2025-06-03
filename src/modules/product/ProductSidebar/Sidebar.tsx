import { readFragment, type FragmentOf } from "gql.tada";
import formatter from "../../../utils/currency-formatter";
import VariantSelector from "./VariantSelector";
import ProductSidebarFragment, { ModelSelectorFragment } from "./Sidebar.fragment";

interface ProductSidebarProps {
  product: FragmentOf<typeof ProductSidebarFragment>;
}

const ProductSidebar = (props: ProductSidebarProps) => {
  const product = readFragment(ProductSidebarFragment, props.product);
  const models = readFragment(ModelSelectorFragment, product.product?.variants);
  return (
    <div class="flex h-full w-1/3 flex-col pl-6">
      <div class="flex grow-0 flex-col overflow-y-hidden">
        <div class="my-4 ml-3 flex flex-col">
          <p class="font-bebas text-5xl font-semibold">{product.name}</p>
          <p class="text-lg font-medium text-green-600">by {product.product?.brand?.name}</p>
          <StarRating />
        </div>
        <div class="my-1 ml-3 flex flex-col">
          <p class="font-bebas text-5xl">{formatter.format(product?.price)}</p>
        </div>
        <VariantSelector models={models!} />
        <div class="my-4 ml-3 flex flex-col space-y-3">
          <p class="font-serif text-lg">{product.product?.description}</p>
        </div>
      </div>
      <div class="my-4 mt-auto ml-3 flex space-x-3">
        <button
          class="flex h-16 w-full items-center justify-center rounded-md bg-green-700 transition-transform duration-100 active:scale-90"
          aria-label="Add to Cart"
        >
          <p class="font-bebas text-3xl text-white">Buy Now</p>
        </button>
        <button
          class="flex h-16 w-full items-center justify-center rounded-md border-2 border-green-700 transition-transform duration-100 active:scale-90"
          aria-label="Add to Cart"
        >
          {/* <HeartIcon className="mr-2 h-8 w-8 text-white" /> */}
          <p class="font-bebas text-3xl text-green-700">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;

export function StarRating() {
  return (
    <ul class="flex">
      <li>
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="star"
          class="w-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="star"
          class="w-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="star"
          class="w-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="star"
          class="w-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="star"
          class="w-4 text-yellow-500"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
          ></path>
        </svg>
      </li>
    </ul>
  );
}
