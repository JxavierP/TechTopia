import { PlusIcon } from "../Icons";

function ProductCard() {
	return (
		<li aria-label="ProductCard_container" class="group flex h-max w-3xs cursor-pointer flex-col">
			<div
				aria-label="ProductCard_image_container"
				class="relative mb-1 h-80 justify-center rounded-xl border-2 border-transparent bg-white shadow-xl transition-transform duration-200 ease-linear group-hover:border-indigo-600 active:scale-95"
			>
				<button class="absolute top-3 right-3 rounded-md border-2 border-gray-300 p-0.5 transition-transform duration-100 ease-in hover:border-transparent hover:bg-indigo-600 active:scale-105">
					<PlusIcon class="h-5 w-5 hover:stroke-white" />
				</button>
				<div aria-label="image_wrapper" class="flex h-full flex-col items-center justify-center">
					<img src="https://techtopia.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FJ0ieme1R8CoWJfRWKsFh&w=1920&q=75" />
				</div>
			</div>
			<div aria-label="ProductCard_details_container" class="link-underline flex flex-col">
				<span class="font-sans text-sm font-semibold text-indigo-600">PlayStation</span>
				<p class="truncate font-sans text-lg font-semibold text-[#131416]">
					DualSense Wireless Controller
				</p>
				<p class="font-bebas text-3xl text-[#131416]">$60.00</p>
			</div>
		</li>
	);
}

export default ProductCard;
