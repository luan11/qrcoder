import { ReactNode } from "react";

export type QrCodeContextData = {
	content: string;
	saved: string[];
	isEmpty: boolean;
	isDownloading: boolean;
	isSaving: boolean;
	updateContent: (content: string) => void;
	downloadAsImage: () => void;
};

export type QrCodeProviderProps = {
	children: ReactNode;
};