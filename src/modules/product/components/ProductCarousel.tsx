import { readFragment, type FragmentOf } from "gql.tada";
import { CarouselViewFragment } from "../fragments/ProductCarousel.fragment";
import { For } from "solid-js";
import { useCarouselStore } from "../Store";

const ProductCarousel = (props: { data: FragmentOf<typeof CarouselViewFragment> }) => {
  const product = readFragment(CarouselViewFragment, props.data);
  const carouselStore = useCarouselStore().carousel;
  const setCarouseStore = useCarouselStore().setCarouselStore;
  return (
    <div class="sticky flex w-2/3">
      {/* Carousel List Component*/}
      <div class="flex h-full w-64 flex-col items-center py-4">
        <div class="flex w-full grow flex-col justify-center space-y-2 pr-12">
          <For each={carouselStore.imageList.list}>
            {(image, index) => (
              <span
                on:click={() => setCarouseStore({ viewerImage: image.url })}
                tabIndex={index()}
                class={`flex h-28 w-28 cursor-pointer flex-col items-center rounded-lg border-2 bg-white p-2 shadow-lg transition-transform duration-100 ease-linear hover:border-green-600 active:scale-90 ${
                  image.url === carouselStore.viewerImage
                    ? "border-green-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.fileName}
                  title={image.fileName}
                  class="h-full max-w-max"
                />
              </span>
            )}
          </For>
        </div>
      </div>

      {/* Carousel View Component */}
      <div class="flex h-full w-full items-center justify-center bg-white">
        <div class="relative flex h-[80%] w-[80%] items-center justify-center">
          <img
            src={carouselStore.viewerImage}
            alt={product.product?.name + " by " + product.product?.brand?.name}
            class="h-auto max-h-full max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
