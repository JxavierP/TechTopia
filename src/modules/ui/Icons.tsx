interface IconProps {
  class?: string;
}

const MenuIcon = ({ class: className }: IconProps) => {
  return (
    <svg
      class={className}
      width="24px"
      height="24px"
      stroke-width={2}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 5H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M3 19H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={28}
      width={28}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      class="group-hover:text-white text-green-600"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
      </path>
    </svg>
  );
};

const SearchIcon = ({ class: className }: IconProps) => {
  return (
    <svg
      class={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path d="M17 17L21 21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path
        d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

const PlusIcon = ({ class: className }: IconProps) => {
  return (
    <svg
      class={className}
      width="24px"
      height="24px"
      stroke-width={2}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M6 12H12M18 12H12M12 12V6M12 12V18"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

const MinusIcon = ({ class: className }: IconProps) => {
  return (
    <svg
      class={className}
      width="24px"
      height="24px"
      stroke-width={2}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
    >
      <path
        d="M6 12H18"
        stroke="#000000"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
const TrashIcon = ({ class: className }: IconProps) => {
  return (
    <svg
      class={`${className} hover:fill-current`}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      stroke-width={2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      stroke="currentColor"
    >
      <path
        d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
        // stroke="currentColor"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
        // stroke="#000000"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export { MenuIcon, CartIcon, SearchIcon, PlusIcon, MinusIcon, TrashIcon };
