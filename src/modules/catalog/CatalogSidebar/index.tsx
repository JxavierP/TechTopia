import { For } from "solid-js";
import type { Brand } from "../../../graphql/generated/graphql";

interface CatalogSidebarProps {
  brands: Brand[];
}

const CatalogSidebar = (props: CatalogSidebarProps) => {
  const brands = props.brands;
  return (
    <div class="flex h-full w-60 shrink-0 flex-col space-y-3">
      <button class="flex w-full rounded-lg bg-[#EDEDED] px-4 py-2 font-semibold text-[#292A2F] hover:bg-indigo-500 hover:text-white">
        <span>Shop by Brands</span>
      </button>
      <For each={brands} fallback={<div>Loading...</div>}>
        {(brand) => (
          <button class="flex w-full rounded-lg bg-[#EDEDED] px-4 py-2 text-[#292A2F] hover:bg-indigo-500 hover:text-white">
            <span>{brand.name}</span>
          </button>
        )}
      </For>
    </div>
  );
};

export default CatalogSidebar;
