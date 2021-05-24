import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div className="main-container">
				<div className="has-text-centered">
					<p className="is-size-1 has-test-weight-medium is-uppercase">
						Time With Perfection
					</p>
					<p className="is-size-5">
						Click the menu in the top right to get started
					</p>
				</div>
				<footer className="footer has-text-centered has-text-grey">
					<div className="buttons is-centered">
						<a
							href="https://github.com/dhruvindsd-dev"
							target="_blank"
							className="button is-light">
							<span className="icon is-large">
								<VscGithubAlt />
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/dhruvin-deshpande"
							target="_blank"
							className="button is-light">
							<span className="icon is-large">
								<FaLinkedin />
							</span>
						</a>
					</div>
					<p>Created By Dhruvin</p>
					<p>Contact me </p>
					<a href="mailto:dhruvinddev@gmail.com">dhruvinddev@gmail.com</a>
				</footer>
			</div>
		</>
	);
}
