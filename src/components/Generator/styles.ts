import tw from 'tailwind-styled-components';

type ButtonProps = {
	$success?: boolean;
};

export const Container = tw.div`
	flex-grow
	h-screen
	bg-gray-800
	flex
	flex-col
	justify-center
	items-center
`;

export const TextArea = tw.textarea`
	py-3 
	px-6 
	rounded 
	resize-none 
	my-6 
	w-2/6
	bg-gray-900
	text-gray-200
`;

export const Buttons = tw.div`
	flex
`;

export const Button = tw.button<ButtonProps>`
	flex
	items-center
	px-4
	py-2
	rounded
	text-gray-200
	transition-all
	${({$success}) => {
		return $success 
			? 'bg-green-500 hover:bg-green-400' 
			: 'bg-indigo-600 hover:bg-indigo-500'
	}}
`;