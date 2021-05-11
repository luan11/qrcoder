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
	p-4
	page
	overflow-y-auto
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
	text-2xl
	text-blue-600
`;

export const ButtonRemove = tw.button`
	text-gray-200
	hover:text-red-500
	transition-colors
	mt-10
	text-center
	py-2
	px-4
	rounded-md
	border-2
	border-gray-200
	hover:border-red-500
`;