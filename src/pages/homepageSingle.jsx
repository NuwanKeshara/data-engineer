import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import "./styles/projects.css";
import "./styles/articles.css";
import "./styles/contact.css";

const HomepageSingle = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [activeSection, setActiveSection] = useState("home");
	
	const homeRef = useRef(null);
	const projectsRef = useRef(null);
	const articlesRef = useRef(null);
	const certificationsRef = useRef(null);

	const scrollToSection = React.useCallback((sectionId) => {
		const sectionMap = {
			home: homeRef,
			projects: projectsRef,
			articles: articlesRef,
			certifications: certificationsRef,
		};

		const targetRef = sectionMap[sectionId];
		if (targetRef && targetRef.current) {
			const offset = 100; // Offset for fixed navbar
			const elementPosition = targetRef.current.offsetTop;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			
			// Update URL hash without triggering scroll
			window.history.pushState(null, "", `#${sectionId}`);
		}
	}, []);

	useEffect(() => {
		// Add smooth scroll behavior
		document.documentElement.style.scrollBehavior = "smooth";
		
		// Handle hash navigation on initial load
		const hash = window.location.hash.substring(1);
		if (hash) {
			setTimeout(() => {
				scrollToSection(hash);
			}, 100);
		} else {
			window.scrollTo(0, 0);
		}
		
		return () => {
			document.documentElement.style.scrollBehavior = "auto";
		};
	}, [scrollToSection]);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}

			// Update active section based on scroll position
			const sections = [
				{ id: "home", ref: homeRef },
				{ id: "projects", ref: projectsRef },
				{ id: "articles", ref: articlesRef },
				{ id: "certifications", ref: certificationsRef },
			];

			const scrollPosition = window.scrollY + 200; // Offset for better detection

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section.ref.current) {
					const offsetTop = section.ref.current.offsetTop;
					if (scrollPosition >= offsetTop) {
						setActiveSection(section.id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: "relative",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active={activeSection} onNavigate={scrollToSection} />
				{stayLogo && (
					<div className="fixed-logo-wrapper">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
				)}
				<div className="content-wrapper">
					{/* Home Section */}
					<section id="home" ref={homeRef} className="page-section">
						<div className="homepage-logo-container" style={{ opacity: stayLogo ? 0 : 1, pointerEvents: stayLogo ? "none" : "auto" }}>
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className="homepage-container">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="title homepage-title">
										{INFO.homepage.title}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="about1.jpg"
												alt="about"
												className="homepage-image"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-socials">
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.medium}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMedium}
										className="homepage-social-icon"
									/>
								</a>

								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>

								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faEnvelope}
										className="homepage-social-icon"
									/>
								</a>
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>
					</section>

					{/* Projects Section */}
					<section id="projects" ref={projectsRef} className="page-section">
						<div className="projects-container">
							<div className="title projects-title">
								My Data Projects...🛠️
							</div>

							<div className="subtitle projects-subtitle">
								I've worked on a variety of projects over the years
								and I'm proud of the progress I've made. Many of
								these projects are open-source and available for
								others to explore and contribute to. If you're
								interested in any of the projects I've worked on,
								please feel free to check out the code and suggest
								any improvements or enhancements you might have in
								mind. Collaborating with others is a great way to
								learn and grow, and I'm always open to new ideas and
								feedback.
							</div>

							<div className="projects-list">
								<AllProjects />
							</div>
						</div>
					</section>

					{/* Articles Section */}
					<section id="articles" ref={articlesRef} className="page-section">
						<div className="articles-main-container">
							<div className="title articles-title">
								{INFO.articles.title}
							</div>

							<div className="subtitle articles-subtitle">
								{INFO.articles.description}
							</div>

							<div className="articles-container">
								<div className="articles-wrapper">
									{myArticles.map((article, index) => {
										const articleImages = [
											"DDIA.jpeg",
											"data-quality-checks.jpg",
											"starvssnowflake.png",
											"spark.webp",
											"iot.jpg",
											"datavault.webp",
											"python builtin.webp",
											"sql_views.webp",
											"datawarehouse.webp",
											"scd.webp",
											"advancesql.webp",
										];
										return (
											<div
												className="articles-article"
												key={(index + 1).toString()}
											>
												<Article
													key={(index + 1).toString()}
													date={article().date}
													title={article().title}
													description={article().description}
													link={article().link}
													image={articleImages[index]}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</section>

					{/* Certifications Section */}
					<section id="certifications" ref={certificationsRef} className="page-section">
						<div className="contact-container">
							<div className="title contact-title">My Professional Certifications</div>

							<div className="subtitle contact-subtitle">
								Thank you for taking the time to explore my certifications. Each one represents a step in my journey as a data engineer and reflects my commitment to continuous learning and professional growth.

								I believe certifications are not just credentials, but proof of the skills, effort and curiosity I have put into stay connected with world of technology. I will continue to update this page as I pursue new challenges and expand my expertise.
							</div>
						</div>

						<div className="certifications-grid">
							<div className="cert-card">
								<img src="/databricks certification.png" alt="Databricks Certified Data Engineer Associate" />
								<div className="cert-name">Databricks Certified Data Engineer Associate</div>
							</div>
							<div className="cert-card">
								<img
									src="/fabric certification.png"
									alt="Microsoft Certified: Fabric Data Engineer Associate"
									style={{
										height: "350px",
										objectFit: "contain",
										maxWidth: "100%",
									}}
								/>
								<div className="cert-name">
									Microsoft Certified: Fabric Data Engineer Associate
								</div>
							</div>
							<div className="cert-card">
								<img src="/m1.png" alt="Explore Core Data Concepts in Microsoft Azure" />
								<div className="cert-name">Explore Core Data Concepts in Microsoft Azure</div>
							</div>
							<div className="cert-card">
								<img src="/m2.png" alt="Microsoft Azure Cosmos DB" />
								<div className="cert-name">Microsoft Azure Cosmos DB</div>
							</div>
							<div className="cert-card">
								<img src="/d1.png" alt="Databricks Lakehouse Fundamentals" />
								<div className="cert-name">Databricks Lakehouse Fundamentals</div>
							</div>
							<div className="cert-card">
								<img src="/d2.png" alt="Databricks Generative AI Fundamentals" />
								<div className="cert-name">Databricks Generative AI Fundamentals</div>
							</div>
							<div className="cert-card">
								<img src="/dl2.png" alt="DeepLearning.AI : Neural Networks and Deep Learning" />
								<div className="cert-name">DeepLearning.AI : Neural Networks and Deep Learning</div>
							</div>
							<div className="cert-card">
								<img src="/dl1.png" alt="DeepLearning.AI : Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization" />
								<div className="cert-name">DeepLearning.AI : Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</div>
							</div>
							<div className="cert-card">
								<img src="/sap1.png" alt="Data Modeling with SAP Solutions - Record of Achievement" />
								<div className="cert-name">Data Modeling with SAP Solutions - Record of Achievement</div>
							</div>
							<div className="cert-card">
								<img src="/sap2.png" alt="SAP Analytics Cloud - Record of Achievement" />
								<div className="cert-name">SAP Analytics Cloud - Record of Achievement</div>
							</div>
						</div>
					</section>

					{/* Footer */}
					<div className="page-footer">
						<Footer onNavigate={scrollToSection} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HomepageSingle;

