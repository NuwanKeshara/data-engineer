import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Certifications = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certifications");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certifications | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certifications" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

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
						{/* <div className="cert-card">
							<img src="/fabric certification.png" alt="Microsoft Certified: Fabric Data Engineer Associate" />
							<div className="cert-name">Microsoft Certified: Fabric Data Engineer Associate</div>
						</div> */}
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

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certifications;
