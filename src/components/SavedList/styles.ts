import tw from 'tailwind-styled-components';

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