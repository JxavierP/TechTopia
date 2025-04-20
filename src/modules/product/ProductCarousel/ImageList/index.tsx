import { For } from "solid-js";
import { store as productStore, setStore as setProductStore } from "../../Store";

const ImageList = () => {
  return (
    <div class="flex h-full w-64 flex-col items-center py-4">
      <div class="flex w-full grow flex-col items-center justify-center space-y-2 px-12">
        <For each={productStore.imageList.list}>
          {(image, index) => (
            <span
              on:click={() => setProductStore({ viewerImage: image.url })}
              tabIndex={index()}
              class={`flex h-28 w-28 cursor-pointer flex-col items-center rounded-lg border-2 bg-white p-2 shadow-lg transition-transform duration-100 ease-linear hover:border-indigo-600 active:scale-90 ${
                image.url === productStore.viewerImage ? "border-indigo-600" : "border-transparent"
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
  );
};

export default ImageList;
