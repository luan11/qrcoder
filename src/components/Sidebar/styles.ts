import tw from 'tailwind-styled-components';

export const Container = tw.nav`
	lg:w-1/4
	h-screen
	bg-gray-900
	text-gray-200
	z-10
	shadow-xl
	flex
	flex-col
`;

export const Logo = tw.h1`
	text-center
	w-full
	mb-0
	font-bold
	md:py-8
	py-4
	md:px-6
	px-2
	bg-blue-900
	lg:text-lg
	tracking-widest
`;

export const List = tw.ul`
	flex-grow
	flex
	flex-col
`;

export const ListItem = tw.li`
	border-b-2
	border-blue-900
	uppercase
	bg-transparent
	transition-colors

	hover:bg-blue-600
	hover:text-white
`;

export const LinkText = tw.span`
	lg:inline-block
	ml-2
	hidden
`;