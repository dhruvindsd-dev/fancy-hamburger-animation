import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";

function Nav({ setCursor, openMenu }) {
	return (
		<nav className="navbar is-fixed-top is-light is-spaced">
			<div className="navbar-brand">
				<div className="navbar-item">
					<Link href="/">
						<button className="button is-large is-light">
							<span className="is-size-4 has-text-weight-medium">Omega</span>
						</button>
					</Link>
				</div>
			</div>
			<div className="navbar-end">
				<div
					className="navbar-item"
					onMouseEnter={setCursor.bind(this, true)}
					onMouseLeave={setCursor.bind(this, false)}>
					<button className="button is-light is-large">
						<span className="icon is-large" onClick={openMenu}>
							<HiMenuAlt3 size={35} />
						</span>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
