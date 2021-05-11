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

export const Table = tw.table`
	lg:table-auto
	table-fixed
	w-full
	text-gray-200
`;

export const Th = tw.th`
	border-b-2
	py-4
	px-4
	text-center
	border-gray-600
	uppercase
	tracking-wider
	lg:w-auto
	w-3/6
`;