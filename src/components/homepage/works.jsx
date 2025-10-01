import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/syscolabs.png"
								alt="Sysco LABS Sri Lanka"
								className="work-image"
							/>
							<div className="work-title">Sysco LABS Sri Lanka</div>
							<div className="work-subtitle">Engineer - Data Engineering</div>
							<div className="work-duration">April 2024 - August 2024</div>
						</div>

						<div className="work">
							<img
								src="/axiatadigitallabs.jpg"
								alt="Axiata Digital Labs"
								className="work-image"
							/>
							<div className="work-title">Axiata Digital Labs</div>
							<div className="work-subtitle">Data Engineer</div>
							<div className="work-duration">December 2022 - December 2023</div>
						</div>

						<div className="work">
							<img
								src="/blackswan.png"
								alt="BlackSwan Technologies"
								className="work-image"
							/>
							<div className="work-title">BlackSwan Technologies</div>
							<div className="work-subtitle">Data Engineer</div>
					<div className="work-duration">August 2021 - January 2023</div>
						</div>
					</div>
				}
			/>
			<div className="work-highlights">
				<div className="highlight-title">Work Highlights</div>
				<div className="highlight-images">
					<img src="/labs4.jpg" alt="Work highlight 1" className="highlight-image" />
					<img src="/labs2.jpg" alt="Work highlight 2" className="highlight-image" />
					<img src="/labs.jpg" alt="Work highlight 3" className="highlight-image" />
					<img src="/adl.jpg" alt="Work highlight 4" className="highlight-image" />
				</div>
			</div>
		</div>
	);
};

export default Works;
