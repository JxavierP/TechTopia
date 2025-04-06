import { PlusIcon } from "../Icons"

function ProductCard() {
  return (
    <div aria-label="ProductCard_container" class="group flex flex-col w-3xs h-max cursor-pointer">
      <div aria-label="ProductCard_image_container" class="relative bg-white rounded-xl h-80 justify-center shadow-xl 
        mb-1 border-2 border-transparent transition-transform duration-200 ease-linear group-hover:border-indigo-600 active:scale-95">
        <button class="absolute top-3 right-3 active:scale-105 transition-transform duration-100 ease-in border-gray-300 hover:border-transparent hover:bg-indigo-600 border-2 rounded-md p-0.5">
          <PlusIcon class="w-5 h-5 hover:stroke-white" />
        </button>
        <div aria-label="image_wrapper" class="flex flex-col h-full items-center justify-center">
          <img src="https://techtopia.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FJ0ieme1R8CoWJfRWKsFh&w=1920&q=75" />
        </div>
      </div>
      <div aria-label="ProductCard_details_container" class="flex flex-col link-underline">
        <span class="font-sans text-sm font-semibold text-indigo-600">PlayStation</span>
        <p class="font-sans font-semibold text-lg truncate text-[#131416]">DualSense Wireless Controller</p>
        <p class="font-bebas text-3xl text-[#131416]">$60.00</p>
      </div>
    </div>
  )
}

export default ProductCard
