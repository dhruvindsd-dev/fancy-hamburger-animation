import React, { useEffect, useState } from "react";

function GetMousePosition() {
	const [MousePosition, setMousePosition] = useState({ x: null, y: null });
	const handleMouse = (e) => {
		setMousePosition({ x: e.pageX, y: e.pageY });
	};
	useEffect(() => {
		window.addEventListener("mousemove", handleMouse);
		return () => window.removeEventListener("mousemove", handleMouse);
	}, []);
	return MousePosition;
}

export default GetMousePosition;
