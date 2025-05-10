// import Image from "next/image";
// import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
// import { MinusSmIcon, PlusSmIcon, TrashIcon } from "@heroicons/react/outline";
// import {
//   CartProduct,
//   useRemoveOneFromCart,
//   useAddToCart,
//   useRemoveFromCart,
// } from "../state";
// import { FC } from "react";
// import formatter from "utils/currency-formatter";
// import Image from "next/future/image";

import formatter from "../../../utils/currency-formatter";
import { MinusIcon, PlusIcon, TrashIcon } from "../../ui/Icons";

// interface CartItemProps {
//   cartItem: CartProduct;
// }

const CartItemLarge = ({}) => {
  // const addItem = useAddToCart();
  // const removeOneItem = useRemoveOneFromCart();
  // const removeAllItems = useRemoveFromCart();
  return (
    <div
      // key={cartItem.id}
      class="flex h-36 divide-x divide-green-400 rounded-lg border-2 border-green-600/25"
    >
      <span class="flex h-full w-36 shrink-0 cursor-pointer flex-col items-center rounded-l-lg border-transparent bg-white p-2 transition duration-100 ease-linear hover:border-green-600 active:scale-90">
        <img
          src="https://us-east-1.graphassets.com/A2mE0eiUS1qqHi8fTDMCgz/J0ieme1R8CoWJfRWKsFh"
          alt=""
          class="h-full max-w-full"
        />
      </span>
      <div class="flex w-full items-center justify-between rounded-r-lg bg-white p-2">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <p class="font-bebas text-3xl leading-tight">
              PlayStation DualSense Wireless Controller
            </p>
          </div>
          <ul class="flex space-x-2">
            {/* {cartItem.selectedOptions.map((option) => ( */}
            <li class="flex text-sm font-semibold text-green-600 capitalize">
              Color:
              <p class="ml-1 font-normal text-black capitalize">White</p>
            </li>
            <li class="flex text-sm font-semibold text-green-600 capitalize">
              Model:
              <p class="ml-1 font-normal text-black capitalize">S</p>
            </li>
            {/* ))} */}
          </ul>
          <p class="font-bebas text-3xl">{formatter.format(21.0)}</p>
        </div>
        <div class="flex items-center">
          <button class="flex items-center justify-center rounded-sm border border-gray-400 p-1 hover:bg-green-100 focus:outline-none active:bg-green-200">
            <PlusIcon class="h-5 w-5" />
          </button>
          <p class="text-md flex items-center justify-center px-3 font-semibold">
            3{/* {cartItem.quantity} */}
          </p>
          <button class="flex items-center justify-center rounded-sm border border-gray-400 p-1 hover:bg-green-100 focus:outline-none active:bg-green-200">
            <MinusIcon class="h-5 w-5" />
          </button>
          <button
            // onClick={() => removeAllItems(cartItem)}
            class="ml-3 flex items-center justify-center rounded-sm text-red-600 focus:outline-none"
          >
            <TrashIcon class="h-5 w-5 text-red-500" />
            {/* <span class="text-sm">Delete</span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemLarge;
