export const useIsMobile = () => {
	if (typeof window !== "undefined") {
		if (window.innerWidth < 769) return true;
		return false;
	}
};
