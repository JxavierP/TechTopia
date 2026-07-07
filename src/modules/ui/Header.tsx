import { Link } from "@tanstack/solid-router";
import { MenuIcon, CartIcon, SearchIcon } from "./Icons";

function Header() {
  return (
    <div class="top-0 left-0 flex h-16 w-screen items-center bg-[#EDEDED] px-4 shadow-sm md:px-16 lg:px-32">
      <div class="flex w-1/3 justify-start space-x-3">
        <button class="group flex items-center justify-center rounded-md bg-white p-2 hover:bg-green-600 hover:text-white">
          <MenuIcon class="group-active:text-white" />
        </button>
        <Link to="/" class="font-bebas text-4xl font-bold">
          TECH
          <span class="text-green-600">TOPIA</span>.
        </Link>
      </div>
      <div class="flex w-1/3 justify-center">
        <button class="group flex items-center justify-center rounded-md bg-white p-2 hover:bg-green-600 hover:text-white">
          <SearchIcon class="group-active:text-white" />
        </button>
        <input
          type="search"
          class="bg-white px-2 text-black outline-none"
          placeholder="Search for anything."
        />
      </div>
      <div class="flex w-1/3 justify-end">
        <Link
          to="/cart"
          class="group flex items-center justify-center space-x-1 rounded-md bg-white px-2 py-1 hover:bg-green-600 hover:text-white"
        >
          <CartIcon /* class="group-active:text-white" */ />
          <span class="font-bebas text-2xl">$0.00</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
