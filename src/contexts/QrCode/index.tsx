import { createContext, useState } from "react";

import { QrCodeContextData, QrCodeProviderProps } from './types';

export const QrCodeContext = createContext({} as QrCodeContextData);

export function QrCodeProvider({ children }: QrCodeProviderProps) {
	const [content, setContent] = useState('');
	const [saved, setSaved] = useState([]);
	const [isEmpty, setIsEmpty] = useState(content === '');
	const [isDownloading, setIsDownloading] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	function updateContent(content: string) {
		setContent(content);
		setIsEmpty(content === '');
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
		};

		if (svgData) {
			img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
		} else {
			setIsDownloading(false);
		}
	}

	return (
		<QrCodeContext.Provider value={{
			content,
			saved,
			isEmpty,
			isDownloading,
			isSaving,
			updateContent,
			downloadAsImage,
		}}>
			{children}
		</QrCodeContext.Provider>
	);
}