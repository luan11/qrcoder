import tw from 'tailwind-styled-components';

export const Container = tw.div`
	absolute
	left-0
	top-0
	right-0
	bottom-0
	h-full
	w-full
	flex
	flex-col
	items-center
	justify-center
	px-4
	page
`;

export const Title = tw.h2`
	text-center
	md:text-3xl
	text-xl
	text-gray-200
	font-bold
`;
