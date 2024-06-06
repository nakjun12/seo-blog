import { create } from "zustand";

interface ToggleState {
	isMobileMenuOpen: boolean;
	isDesktopMenuOpen: boolean;
	toggleMobileMenu: (flag: boolean) => void;
	toggleDesktopMenu: (flag: boolean) => void;
	closeMenue: () => void;
}

const useToggleStore = create<ToggleState>((set) => ({
	isMobileMenuOpen: false,
	isDesktopMenuOpen: false,
	toggleMobileMenu: (flag) => set({ isMobileMenuOpen: flag }),
	toggleDesktopMenu: (flag) => set({ isDesktopMenuOpen: flag }),
	closeMenue: () => set({ isMobileMenuOpen: false, isDesktopMenuOpen: false }),
}));

export default useToggleStore;
