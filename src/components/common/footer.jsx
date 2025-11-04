import React from "react";

import "./styles/footer.css";

const Footer = (props) => {
	const { onNavigate } = props;

	const handleClick = (e, sectionId) => {
		e.preventDefault();
		if (onNavigate) {
			onNavigate(sectionId);
		}
	};

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href="#home" onClick={(e) => handleClick(e, "home")}>Home</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#articles" onClick={(e) => handleClick(e, "articles")}>Articles</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="#certifications" onClick={(e) => handleClick(e, "certifications")}>Certifications</a>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
