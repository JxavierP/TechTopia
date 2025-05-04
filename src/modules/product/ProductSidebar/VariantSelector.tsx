import { Link } from "@tanstack/solid-router";
import type {
  ColorSelectorFragment,
  ModelSelectorFragment,
} from "../../../graphql/generated/graphql";
import { store as productStore, setStore as setProductStore } from "../Store";
import { Route as ProductSlugRoute } from "../../../routes/product/$slug";
import { createEffect, createMemo, For, Show } from "solid-js";

interface ColorSelectorProps {
  colors: ColorSelectorFragment[];
}

interface ModelSelectorProps {
  models: ModelSelectorFragment[];
}

const ColorSelector = (props: ColorSelectorProps) => {
  const colors = createMemo(() => props.colors);
  console.log(colors);
  return (
    <div class="flex flex-col space-y-1">
      <b>Colors: </b>
      <ul class="flex space-x-4">
        <For each={colors()}>
          {(color, index) => (
            <li tabIndex={index()} title={`Click to select ${color.name}`}>
              <div
                class="flex cursor-pointer"
                onClick={() => {
                  setProductStore({
                    viewerImage: color.images[0].url,
                    imageList: { id: color.id, list: color.images },
                  });
                }}
              >
                <span
                  class={`flex h-12 w-12 flex-col items-center ring-2 ring-offset-2 ${
                    productStore.imageList.id === color.id
                      ? "ring-indigo-600"
                      : "ring-gray-400 hover:ring-indigo-600"
                  }`}
                >
                  <img
                    alt={color.images[0].fileName}
                    src={color.images[0].url}
                    class="h-full max-w-max"
                  />
                </span>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

const ModelSelector = ({ models }: ModelSelectorProps) => {
  const routerSlug = ProductSlugRoute.useParams();
  const currentSlug = createMemo(() => routerSlug().slug);

  return (
    <div class="flex flex-col space-y-1">
      <b>Models: </b>
      <ul class="flex flex-wrap space-x-3">
        {models.map((model, index) => (
          <li tabIndex={index} title={`Click to select ${model.name}`}>
            <Link to="/product/$slug" preload="intent" params={{ slug: model.slug }}>
              <span
                on:click={() => {
                  setProductStore({
                    viewerImage: model.colors[0].images[0].url,
                    imageList: {
                      id: model.colors[0].id,
                      list: model.colors[0].images,
                    },
                  });
                }}
                class={`flex flex-col items-center px-2 ring-2 ring-offset-2 ${
                  currentSlug() === model.slug
                    ? "ring-indigo-600"
                    : "ring-gray-400 hover:ring-indigo-600"
                }`}
              >
                {model.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface VariantSelectorProps {
  models: ModelSelectorFragment[];
}

const VariantSelector = ({ models }: VariantSelectorProps) => {
  const routerSlug = ProductSlugRoute.useParams();
  const selectedModel = createMemo(() => {
    const slug = routerSlug().slug;
    return models.find((model) => model.slug === slug);
  });
  createEffect(() => {
    const model = selectedModel();
    if (model) {
      setProductStore({
        viewerImage: model.colors[0].images[0].url,
        imageList: {
          id: model.colors[0].id,
          list: model.colors[0].images,
        },
      });
    }
  });
  return (
    <div class="mx-3 my-2 flex flex-col space-y-3">
      <ModelSelector models={models} />
      <Show when={selectedModel()}>{(model) => <ColorSelector colors={model().colors} />}</Show>
      {/* <SizeSelector /> */}
    </div>
  );
};

export default VariantSelector;
