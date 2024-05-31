import { create } from "zustand";

interface ToggleState {
	isMenuOpen: boolean;
	toggleMenu: (flag: boolean) => void;
}

const useToggleStore = create<ToggleState>((set) => ({
	isMenuOpen: false,
	toggleMenu: (flag) => set({ isMenuOpen: flag }),
}));

export default useToggleStore;
