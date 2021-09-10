import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./index.module.scss";
import Data from "../../data.json";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useIsMobile } from "../../hooks/js_responsive";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

function Hamburger({ close, setCursorHovered, x, y }) {
	return (
		<>
			<motion.div
				initial={{ visibility: "hidden" }}
				animate={{ visibility: "visible" }}
				exit={{ visibility: "hidden" }}
				transition={{ delay: 1 }}>
				<head className={Styles.header}>
					<p className="is-size-4">Products</p>
					<button
						aria-label="close"
						onClick={close}
						className="button is-large is-light">
						<span
							className="icon is-medium is-clickable"
							onMouseEnter={setCursorHovered.bind(this, true)}
							onMouseLeave={setCursorHovered.bind(this, false)}>
							<GrClose size={30} />
						</span>
					</button>
				</head>
				<MainSection setCursorHovered={setCursorHovered} x={x} y={y} />
			</motion.div>
			<Panels />
		</>
	);
}

export default Hamburger;
const parent = {
	animate: { transition: { staggerChildren: 0.1, delayChildren: 1.1 } },
};
const MainSection = ({ setCursorHovered, x, y }) => {
	return (
		<motion.div className={Styles.main__section}>
			<motion.div
				className={Styles.container}
				variants={parent}
				initial="initial"
				animate="animate"
				exit="exit">
				{Data.map((item) => (
					<ListItem x={x} y={y} {...item} setCursorHovered={setCursorHovered} />
				))}
			</motion.div>
		</motion.div>
	);
};
const titleSlideUp = {
	initial: {
		y: 200,
	},
	animate: {
		y: 0,
	},
};
const mask = {
	initial: { width: "100% " },
	animate: { width: 0 },
};

const ListItem = ({
	title,
	id,
	leftLineFlex,
	rightLineFlex,
	thumbnailPosition,
	offset,
	src,
	setCursorHovered,
	x,
	y,
}) => {
	const [IsHovered, setIsHovered] = useState(false);
	const list = useRef();
	const [Boundaries, setBoundaries] = useState({ top: 0, left: 0 });
	useEffect(() => {
		setBoundaries({
			// @ts-ignore
			top: list.current.getBoundingClientRect().top,
			// @ts-ignore
			left: list.current.getBoundingClientRect().left,
		});
	}, [IsHovered]);
	return (
		<Link href={id}>
			<div ref={list} className={Styles.item__container}>
				<div
					className={`${Styles.line} ${Styles.line__left}`}
					style={{ flex: leftLineFlex }}>
					<motion.div
						variants={mask}
						transition={transition}
						className={Styles.line__left__mask}
					/>
				</div>
				<motion.div
					onMouseEnter={setCursorHovered.bind(this, true)}
					onMouseLeave={setCursorHovered.bind(this, false)}
					onHoverStart={setIsHovered.bind(this, true)}
					onHoverEnd={setIsHovered.bind(this, false)}
					className={`${Styles.title} has-text-grey-dark`}>
					<h2>
						<motion.div transition={transition} variants={titleSlideUp}>
							{title}
						</motion.div>
					</h2>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: IsHovered ? 1 : 0,
						x: x - Boundaries.left + offset,
						y: y - Boundaries.top,
					}}
					transition={{ ease: "linear" }}
					className={Styles.hover__floating__img}>
					<img src={src} />
				</motion.div>
				<div className={Styles.image} style={{ left: thumbnailPosition }}>
					<motion.div
						variants={mask}
						transition={transition}
						className={Styles.mask}
					/>
					<img src={src} alt="" />
				</div>

				<div
					className={`${Styles.line} ${Styles.line__right}`}
					style={{ flex: rightLineFlex }}>
					<motion.div
						variants={mask}
						transition={transition}
						className={Styles.line__right__mask}
					/>
				</div>
			</div>
		</Link>
	);
};

let innerHeight, innerWidth;
if (typeof window !== "undefined") innerWidth = window.innerWidth;
if (typeof window !== "undefined") innerHeight = window.innerHeight;
const get_panel_mobile_variants = (panel_num) => {
	let direction_motion;
	if (panel_num === 1) {
		direction_motion = [innerWidth, 0, 0];
	} else {
		direction_motion = [0, 0, innerWidth];
	}
	return {
		initial: {
			height: "50vh",
			width: 0,
			right: panel_num == 2 ? 0 : null,
		},
		animate: {
			width: [0, innerWidth, 0],
			right: direction_motion,
		},
		exit: {
			width: [0, innerWidth, 0],
			left: direction_motion,
		},
	};
};

const panels_transition = { duration: 2, times: [0, 0.5, 1] };

const Panels = () => {
	const isMobile = useIsMobile();
	if (isMobile) {
	} else {
	}
	return (
		<>
			<motion.div
				initial="initial"
				animate="animate"
				variants={get_panel_mobile_variants(1)}
				transition={panels_transition}
				exit="exit"
				className={Styles.left__panel}></motion.div>
			<motion.div
				initial="initial"
				animate="animate"
				variants={get_panel_mobile_variants(2)}
				transition={panels_transition}
				exit="exit"
				className={Styles.right__panel}></motion.div>
		</>
	);
};
