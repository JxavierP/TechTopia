import { Link } from "@tanstack/solid-router"
import { MenuIcon, CartIcon, SearchIcon } from "./Icons"

function Header() {
  return (
    <div class="flex top-0 left-0 w-screen bg-[#EDEDED] h-16 items-center px-16">
      <div class="flex w-1/3 justify-start space-x-3">
        <button class="group flex items-center justify-center bg-white p-2 rounded-md transition duration-100 ease-linear hover:bg-indigo-600 hover:text-white">
          <MenuIcon class="group-active:text-white" />
        </button>
        <button class="group flex items-center justify-center bg-white p-2 rounded-md transition duration-100 ease-linear hover:bg-indigo-600 hover:text-white">
          <SearchIcon class="group-active:text-white" />
        </button>
      </div>
      <div class="flex w-1/3 justify-center">
        <Link to="/" class="font-bebas text-4xl font-bold">
          TECH
          <span class="text-indigo-600">TOPIA</span>
          .
        </Link>
      </div>
      <div class="flex w-1/3 justify-end">
        <button class="group flex items-center justify-center space-x-1 bg-white py-1 px-2 rounded-md transition duration-100 ease-linear hover:bg-indigo-600 hover:text-white">
          <CartIcon class="group-active:text-white" />
          <span class="font-bebas text-2xl">$0.00</span>
        </button>
      </div>
    </div>
  )
}

export default Header