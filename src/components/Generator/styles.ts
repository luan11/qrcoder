import tw from 'tailwind-styled-components';

type ButtonProps = {
	$success?: boolean;
};

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
	transition-transform
	ease-in-out
	duration-500
	transform
	hover:scale-110
	
	${({$success}) => {
		return $success 
			? 'bg-green-500' 
			: 'bg-indigo-600'
	}}
	

	disabled:opacity-50
	disabled:cursor-default
	disabled:transform-none
`;