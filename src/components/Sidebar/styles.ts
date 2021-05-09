import tw from 'tailwind-styled-components';

export const Container = tw.header`
	w-1/4
	h-screen
	bg-gray-900
	text-gray-200
	shadow-2xl
`;

export const Logo = tw.h1`
	text-center
	w-full
	mb-0
	font-bold
	py-8
	px-6
	bg-gray-700
	text-lg
	tracking-widest
`;

export const ListItem = tw.li`
	py-4
	px-6
	border-b-2
	border-gray-700
	flex
	items-center
	justify-between
	uppercase
	bg-transparent
	transition-colors

	hover:bg-gray-800
	hover:text-white
`;