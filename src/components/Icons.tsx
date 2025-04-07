interface IconProps {
	class?: string;
}

const MenuIcon = ({ class: className }: IconProps) => {
	return (
		<svg
			class={className}
			width="24px"
			height="24px"
			stroke-width="1.5"
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

const CartIcon = ({ class: className }: IconProps) => {
	return (
		<svg
			class={className}
			width="24px"
			height="24px"
			stroke-width="2"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
		>
			<path
				d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z"
				fill="#000000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z"
				fill="#000000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
			<path
				d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
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
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
		>
			<path
				d="M6 12H12M18 12H12M12 12V6M12 12V18"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	);
};

export { MenuIcon, CartIcon, SearchIcon, PlusIcon };
