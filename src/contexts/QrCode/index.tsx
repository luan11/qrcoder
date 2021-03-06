import { createContext, useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QrCodeContextData, QrCodeProviderProps } from './types';

export const QrCodeContext = createContext({} as QrCodeContextData);

export function QrCodeProvider({ children }: QrCodeProviderProps) {
	const [content, setContent] = useState('');
	const [saved, setSaved] = useState<string[]>([]);
	const [isEmpty, setIsEmpty] = useState(content === '');
	const [isDownloading, setIsDownloading] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	function updateContent(data: string) {
		setContent(data);
		setIsEmpty(data === '');
	}

	function downloadAsImage() {
		setIsDownloading(true);

		const container = document.getElementById('qrcode');

		if (!container) {
			setIsDownloading(false);

			return;
		}

		const svgEl = container.querySelector('svg');
		const svgData = svgEl?.outerHTML;

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		const img = new Image();

		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;

			context?.drawImage(img, 0, 0);

			const date = new Date();

			const file = canvas.toDataURL('image/png');
			const filename = `qrcode_${date.getTime()}__qrcoder`;

			const link = document.createElement('a');

			link.download = filename;
			link.href = `${file}`;

			link.click();

			setIsDownloading(false);

			toast('Downloaded successfully!', {
				type: toast.TYPE.SUCCESS
			});
		};

		if (svgData) {
			img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
		} else {
			setIsDownloading(false);

			toast('An error occurred, please try again', {
				type: toast.TYPE.ERROR
			});
		}
	}

	function save() {
		if (saved.indexOf(content) === -1) {
			setIsSaving(true);

			setSaved((old) => {
				const updated = [...old, content];
				const updatedJson = JSON.stringify(updated);

				localStorage.setItem('qrcoder', updatedJson);

				return updated;
			});

			setIsSaving(false);

			toast('Saved successfully!', {
				type: toast.TYPE.SUCCESS
			});
		} else {
			toast('An error occurred, please try again', {
				type: toast.TYPE.ERROR
			});
		}
	}

	function remove(data: string) {
		const array = [...saved];
		const index = array.indexOf(data);

		if (index !== -1) {
			array.splice(index, 1);

			setSaved(array);

			const arrayJson = JSON.stringify(array);

			localStorage.setItem('qrcoder', arrayJson);

			updateContent('');

			toast('Deleted successfully!', {
				type: toast.TYPE.SUCCESS
			});
		} else {
			toast('An error occurred, please try again', {
				type: toast.TYPE.ERROR
			});
		}
	}

	function removeAll() {
		setSaved([]);

		localStorage.setItem('qrcoder', JSON.stringify([]));

		setIsEmpty(true);
	}

	useEffect(() => {
		const data = localStorage.getItem('qrcoder');

		if (data) {
			const dataParsed = JSON.parse(data);

			setSaved(dataParsed);
		}
	}, []);

	return (
		<QrCodeContext.Provider value={{
			content,
			saved,
			isEmpty,
			isDownloading,
			isSaving,
			updateContent,
			downloadAsImage,
			save,
			remove,
			removeAll,
		}}>
			<ToastContainer />

			{children}
		</QrCodeContext.Provider>
	);
}