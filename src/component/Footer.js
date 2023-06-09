import { Row, Col, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import twitterLogo from "../assets/img/twitter-2170.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className=" d-flex flex-direction-column align-items-center justify-content-center p-3">
						<Col md={12} className="navbar-text">
							<div className="social-icon g-5">
								<a href="https://www.linkedin.com/in/patrick-akuagwu">
									<img src={navIcon1} alt="" />
								</a>
								<a href="https://twitter.com/PAkuagwu">
									<img src={twitterLogo} alt="" className="twitter-logo" />
								</a>
								<a href="#">
									<img src={navIcon3} alt="" />
								</a>
							</div>
						</Col>
					<p>copyright &copy; 2023... All rights Reserved</p>
				</Row>
			</Container>
		</footer>
	);
};
