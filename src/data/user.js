const INFO = {
	main: {
		title: "Welcome",
		name: "Nuwan Keshara",
		email: "nuwankyazh@gmail.com",
		logo: "../logo.png",
	},

		socials: {
			linkedin: "https://www.linkedin.com/in/nuwan-keshara/",
			medium: "https://medium.com/@nuwankeshara12",
			github: "https://github.com/NuwanKeshara",
		},

	homepage: {
		title: "Data Engineering | Big Data | Cloud",
		description:
			"Hi 👋, I am Nuwan Keshara, a passionate Data Engineer with couple of years of experience designing and deploying scalable data pipelines, ETL processes and BI solutions. Highly skilled in Python, SQL and Spark with success of delivering automated reports, interactive dashboards and optimized data workflows. Capable of building end to end data engineering solutions that drive business intelligence and decision making.",
	},

	about: {
		title: "Hi! I’m Nuwan Keshara. I love learning and building big data stuff.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "Driven by curiosity and love for data engineering, I explore data while inspiring others through knowledge sharing and continuous learning.",
		description:
			"A collection of my articles and blogs where I share insights, best practices and lessons learned in data engineering, big data systems and modern cloud platforms.",
	},

	projects: [
		{
			title: "IOT Real-time processing with Azure Databricks",
			description:
				"This project builds a real-time IoT data pipeline on Azure Databricks, ingesting weather sensor data via IoT Hub to Event Hub and storing it using the Medallion Architecture (Bronze/Silver/Gold) in Delta Lake. It includes streaming transformations, aggregation and cleansed data storage, with visualization in Power BI and CI versioning via Git and Azure DevOps.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/IOT-Real-time-processing-with-Azure-Databricks",
		},
		{
			title: "Snowflake Data Vault 2.0",
			description:
				"This project implements a scalable Data Vault 2.0 architecture on Snowflake, using the snowflake_sample_data.tpch_sf10 schema with millions of records across Customer, Orders, Region and Nation tables. It builds stages: Staging, Raw DV, Business DV and delivers a star schema dimensional model for analytics. Key components include SnowPipe, Streams and Tasks for near-real-time ingestion and transformation.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/Snowflake_Data_Vault_2.0",
		},
		{
			title: "Movie Ticket DataWarehouse",
			description:
				"This project focuses on building a data warehouse and generating insightful reports from a dataset of customer movie theater bookings within the United States. Dataset is taken from Kaggle and it includes 2 CSV files. The objective is to build a datawarehouse from the ground up, enabling users to extract meaningful business intelligence through the comprehensive reports.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/MovieTicket-DataWarehouse",
		},
		{
			title: "SmartTemp: IOT Based Smart Temperature Predictor",
			description:
				"IoT Based Temperature Prediction System: Designed and developed an IoT based system to monitor and predict ambient temperature, integrating sensors to collect real-time temperature data. Developed a motion based mechanism (gauge) to indicate temperature fluctuations to visualize current temperature readings. Time Series Forecasting: Utilized a time series algorithm to forecast temperature values for the next 30 days by leveraging historical seasonal temperature data to improve prediction accuracy.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara",
		},
		{
			title: "Bank Marketing Analysis and Loan Prediction System using Clustering and Classification",
			description:
				"This project delivers a bank marketing and loan prediction system, integrating clustering and classification for customer segmentation and risk assessment. Campaign data is processed to extract insights while a predictive model estimates loan approval risks. A web interface enables real-time customer data input, supporting data-driven marketing, efficient decision-making and improved risk management.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara",
		},
	],
};

export default INFO;
