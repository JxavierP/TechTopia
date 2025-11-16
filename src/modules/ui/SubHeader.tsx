import { Link } from "@tanstack/solid-router";

function SubHeader() {
  return (
    <div class="flex space-x-8 py-2 font-pt text-lg text-[#292A2F] lg:flex">
      <Link to="/catalog" class="link-underline cursor-pointer">
        Browse
      </Link>
      <p class="link-underline cursor-pointer">New</p>
      <p class="link-underline cursor-pointer">Sales</p>
      <span
        // onMouseEnter={openDropdown}
        // onMouseLeave={closeDropdown}
        class="link-underline group relative flex cursor-pointer items-center"
      >
        <p>Brands</p>
        {/* <ChevronDownIcon class="relative top-[1px] h-5 transition duration-300 group-hover:rotate-180" /> */}
      </span>
    </div>
  );
}

export default SubHeader;
