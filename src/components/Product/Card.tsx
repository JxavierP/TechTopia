function ProductCard() {
    return (
        <div aria-label="ProductCard_container" class="flex flex-col w-3xs h-max">
            <div aria-label="ProductCard_image_container" class="relative bg-white rounded-xl h-80 justify-center shadow-xl mb-1">
                <button class="absolute"></button>
                <div aria-label="image_wrapper" class="flex flex-col h-full items-center justify-center">
                    <img src="https://techtopia.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FJ0ieme1R8CoWJfRWKsFh&w=1920&q=75" />
                </div>
            </div>
            <div aria-label="ProductCard_details_container" class="flex flex-col">
                <span class="font-sans text-sm font-semibold text-indigo-600">Seller</span>
                <p class="font-sans font-semibold text-lg truncate text-[#131416]">Title</p>
                <p class="font-bebas text-3xl text-[#131416]">Price</p>
            </div>
        </div>
    )
}

export default ProductCard