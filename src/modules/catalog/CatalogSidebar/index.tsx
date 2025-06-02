import { For } from "solid-js";
import type { ResultOf } from "gql.tada";
import type { AllBrandsQuery } from "../../../graphql/queries";

interface CatalogSidebarProps {
  data: ResultOf<typeof AllBrandsQuery>;
}

const CatalogSidebar = (props: CatalogSidebarProps) => {
  const brands = props.data.brands;
  return (
    <div class="flex h-full w-60 shrink-0 flex-col space-y-3">
      <div class="flex flex-col space-y-2">
        <span class="rounded-md bg-[#EDEDED] px-2 py-1 font-semibold text-green-500">
          Shop by Brands
        </span>
        <div class="flex flex-wrap gap-2">
          <For each={brands} fallback={<div>Loading...</div>}>
            {(brand) => (
              <button class="flex w-max rounded-lg bg-[#EDEDED] px-2 py-1 text-[#292A2F] hover:bg-green-500 hover:text-white">
                <span>{brand.name}</span>
              </button>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default CatalogSidebar;
