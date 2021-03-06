import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hamburger Animation 🍔</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="portfolio project"></meta>
			</Head>
			<div className="main-container">
				<div className="has-text-centered">
					<p className="is-size-1 is-size-3-mobile has-test-weight-semibold is-uppercase">
						Time With Perfection
					</p>
					<p className="is-size-5 is-size-6-mobile">
						Click the menu in the top right to get started
					</p>
				</div>
				<footer className="footer has-text-centered has-text-grey">
					<div className="buttons is-centered">
						<a
							href="https://github.com/dhruvindsd-dev"
							target="noreferrer"
							className="button is-light">
							<span className="icon is-large">
								<VscGithubAlt />
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/dhruvin-deshpande"
							target="noreferrer"
							className="button is-light">
							<span className="icon is-large">
								<FaLinkedin />
							</span>
						</a>
					</div>
					<p>Created By Dhruvin</p>
					<p className="is-size-7-mobile">Contact me </p>
					<a className="is-size-7-mobile" href="mailto:dhruvinddev@gmail.com">
						dhruvinddev@gmail.com
					</a>
				</footer>
			</div>
		</>
	);
}
