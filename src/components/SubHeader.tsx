function SubHeader() {
    return (
        <div class="flex space-x-8 py-2 font-pt text-lg text-[#292A2F] lg:flex">
            <p class="link-underline cursor-default">Browse</p>
            <p class="link-underline cursor-default">New</p>
            <p class="link-underline cursor-default">Sales</p>
            <span
                // onMouseEnter={openDropdown}
                // onMouseLeave={closeDropdown}
                class="link-underline group relative flex cursor-default items-center"
            >
                <p>Brands</p>
                {/* <ChevronDownIcon class="relative top-[1px] h-5 transition duration-300 group-hover:rotate-180" /> */}
            </span>
        </div>
    );
}

export default SubHeader;