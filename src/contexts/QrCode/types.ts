import { ReactNode } from "react";

export type QrCodeContextData = {
	content: string;
	saved: string[];
	isEmpty: boolean;
	isDownloading: boolean;
	isSaving: boolean;
	updateContent: (data: string) => void;
	downloadAsImage: () => void;
	save: () => void;
	remove: (data: string) => void;
};

export type QrCodeProviderProps = {
	children: ReactNode;
};