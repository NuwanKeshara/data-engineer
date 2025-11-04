import React from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active, onNavigate } = props;

	const handleClick = (e, sectionId) => {
		e.preventDefault();
		if (onNavigate) {
			onNavigate(sectionId);
		}
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#home" onClick={(e) => handleClick(e, "home")}>Home</a>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a>
							</li>
						<li
							className={
								active === "articles"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#articles" onClick={(e) => handleClick(e, "articles")}>Articles</a>
						</li>
						<li
							className={
								active === "certifications"
									? "nav-item active"
									: "nav-item"
							}
						>
							<a href="#certifications" onClick={(e) => handleClick(e, "certifications")}>Certifications</a>
						</li>
						
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
