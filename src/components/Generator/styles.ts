import tw from 'tailwind-styled-components';

type ButtonProps = {
	$default?: boolean;
	$success?: boolean;
	$error?: boolean;
};

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

export const TextArea = tw.textarea`
	py-3 
	px-6 
	rounded-md
	border-2
	border-blue-900 
	resize-none 
	my-6 
	md:w-3/5
	w-full
	bg-gray-900
	text-gray-200
	md:h-28
	shadow-lg
`;

export const Buttons = tw.div`
	flex
	flex-wrap
	justify-center
`;

export const Button = tw.button<ButtonProps>`
	flex
	items-center
	text-center
	px-4
	py-2
	rounded
	text-gray-200
	transition-transform
	ease-in-out
	duration-500
	transform
	hover:scale-110
	md:mr-4
	mr-2
	md:mb-0
	mb-4
	
	${({$default}) => $default ? 'bg-blue-500' : ''}
	${({$success}) => $success ? 'bg-green-500' : ''}
	${({$error}) => $error ? 'bg-red-500' : ''}

	disabled:opacity-50
	disabled:cursor-default
	disabled:transform-none
`;