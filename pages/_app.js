import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hamburger from "../components/Hamburger/Hamburger";
import Nav from "../components/Nav/Nav";
import GetMousePosition from "../hooks/getMousePosition";
import "../styles/globals.scss";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
	const [CursorHovered, setCursorHovered] = useState(false);
	const { x, y } = GetMousePosition();
	const [IsMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setIsMenuOpen(false);
	}, [router.pathname, router.query.productName]);
	return (
		<>
			<motion.div
				className="cursor"
				animate={{
					x: x - 13,
					y: y - 13,
					scale: CursorHovered ? 1.2 : 1,
					opacity: CursorHovered ? 0.8 : 0,
				}}
				transition={{ ease: "linear", duration: 0.2 }}></motion.div>
			<AnimatePresence>
				{IsMenuOpen && (
					<Hamburger
						close={setIsMenuOpen.bind(this, false)}
						setCursorHovered={setCursorHovered}
						x={x}
						y={y}></Hamburger>
				)}
			</AnimatePresence>
			<Nav
				setCursor={setCursorHovered}
				openMenu={setIsMenuOpen.bind(this, true)}
			/>
			<Component {...pageProps} setCursor={setCursorHovered} />
		</>
	);
}

export default MyApp;
