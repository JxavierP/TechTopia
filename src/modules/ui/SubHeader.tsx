// import { Link } from "@tanstack/solid-router";
import type { ResultOf } from "gql.tada";
import type { AllCategoriesQuery } from "./queries/fetchAllCategories";
import { For } from "solid-js";
import { Link } from "@tanstack/solid-router";

interface SubHeaderProps {
  categories: ResultOf<typeof AllCategoriesQuery>;
}

const SubHeader = (props: SubHeaderProps) => {
  const categories = props.categories.categories;
  return (
    <div class="text-md flex space-x-10 pt-4 pb-2 font-pt text-[#292A2F] lg:flex">
      {/*<Link to="/catalog" class="link-underline cursor-pointer">
        Browse
      </Link>*/}
      <For each={categories} fallback={<div>Loading...</div>}>
        {(category) => (
          <Link to="/shop/$slug" preload="intent" params={{ slug: category.slug! }}>
            <p class="link-underline cursor-pointer">{category.name}</p>
          </Link>
        )}
      </For>
      {/*<p class="link-underline cursor-pointer">New</p>
      <p class="link-underline cursor-pointer">Sales</p>
      <span class="link-underline group relative flex cursor-pointer items-center">
        <p>Brands</p>
      </span>*/}
    </div>
  );
};

export default SubHeader;
