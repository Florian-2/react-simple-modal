import { createContext, useContext } from "react";

type ModalContextType = {
	onClose: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModalContext() {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error("Provider non fourni");
	}

	return context;
}
