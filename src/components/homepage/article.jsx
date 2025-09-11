import React from "react";
// import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link, external } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
						{external ? (
							<a href={link} target="_blank" rel="noopener noreferrer">
								Read article{' '}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</a>
						) : (
							<span>Read article{' '}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</span>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
