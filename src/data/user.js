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
		title: "Hi! I am Nuwan Keshara 🤓I Love Learning and Building Big Data Stuff...",
		description:
			"Hi 👋, I’m Nuwan Keshara, a Data Engineer who loves working with data. I enjoy building end-to-end data solutions from designing data pipelines and ETL workflows to creating dashboards that turn messy data into clear insights. I mostly work with Python, SQL and Spark, and I’m always curious about how big data systems scale and perform, so I love diving deep into them.\
			Right now, I’m reading Designing Data-Intensive Applications by Martin Kleppmann 📖 it’s been an amazing go deep into real-world data systems. If you have read it or have other great data books to recommend, I would love to chat about them!\
			Outside of tech, I’m all about sports and the outdoors. I have won a few 🏆 in swimming 🏊, enjoy cycling and love spending time in nature 🌲. It keeps me balanced and full of energy. If we share any of these interests, feel free to connect!",
	},

	about: {
		title: "Hei !!! I am Nuwan Keshara 🤓  I Love Learning and Building Big Data Stuff...",
		description:
			"Hi, I’m a Data Engineer who’s genuinely passionate about all things about data. I love diving deep into how big data systems are built and how they scale. Right now, I’m reading about Designing Data Intensive Applications by Martin Kleppmann 📖. If you have read it or have some great data books to recommend, please reach out we can happily chat about data. Other than data, I love sports and outdoors. I have competed and won some 🏆 in swimming 🏊, enjoy cycling and love nature 🌲. It really keeps me balanced and alive. If we have something in common, please don't forget to connect with me. See you around !!!",
	},

	articles: {
		title: "My Collection of Articles and Blogs about Data 📝",
		description:
			"A collection of my articles and blogs where I share insights, best practices and lessons learned in data engineering, big data systems and modern cloud platforms.",
	},

	projects: [
		{
			title: "SkyRoute: Flights Graph Network",
			description:
			<><br />A graph-based model of global flight routes built using Neo4j. Airports are modeled as nodes and routes as relationships, integrating airline data to visualize both domestic and international connections. Using Python and Cypher, the OpenFlights dataset was cleaned, transformed and loaded into Neo4j. The project enables shortest-path discovery, multi-hop route analysis and interactive geographic visualization through NeoDash. It strengthened my understanding of graph data modeling, query optimization and spatial analysis, demonstrating how Neo4j can uncover meaningful patterns in complex, interconnected data networks.<br /><br /> Tech stack: <b>Neo4j Graph Database, NeoDash, Neo4j AuraDB Managed Service, Python, Pandas </b></>,
				
			logo: [
				"/neo4j.png",
				"/neodash.png",
				"/auradb.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/SkyRoute",
		},
		{
			title: "CryptoStreamX: Real-Time Crypto Trade Analytics Pipeline",
			description:
			<>CryptoStreamX is a fully streaming data pipeline that captures and processes live cryptocurrency trade data from Binance in real time. Built with Apache Kafka, the system ingests, buffers and distributes high throughput event streams. Kafka Streams and ksqlDB power on the fly transformations, aggregations and real-time analytics without external compute layers. Kafka Connect integrates seamlessly with ClickHouse, a high-performance columnar database, for ultra-fast storage and query execution on time-series trade data.<br /><br /> Tech stack: <b>Apache Kafka, ksqlDB, Kafka Streams, Kafka Connect, ClickHouse database, Docker, Python </b></>,
				
			logo: [
				"/kafka.png",
				"/Clickhouse.png",
				"/ksqldb.svg",
				"/docker.png"
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/CryptoStreamX",
		},
		{
			title: "Smartly: Ad Campaign DataFlow",
			description:
			<>Ad Campaign Dataflow Pipeline: Built a fully automated data pipeline that ingests ad campaign CSV, transforms and cleans data, then loads into GCP BigQuery for analytics. Data Transformation & Orchestration: used DBT models and Airflow DAGs to clean, validate and transform raw data into structured schemas optimized for reporting and downstream tools.<br /><br /> Tech stack: <b>Python, SQL, DBT, Docker, Airflow, BigQuery</b></>,
				
			logo: [
				"/big query.jpg",
				"/airflow.png",
				"/dbt-logo.webp"
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/Ad-Campaign-Dataflow",
		},
		{
			title: "IOT Real-time processing with Azure Databricks",
			description:
				<>This project builds a real-time IoT data pipeline on Azure Databricks, ingesting weather sensor data via IoT Hub to Event Hub and storing it using the Medallion Architecture (Bronze/Silver/Gold) in Delta Lake. It includes streaming transformations, aggregation and cleansed data storage, with visualization in Power BI and CI versioning via Git and Azure DevOps.<br /><br /> Tech stack: <b>Azure, Databricks, Spark, Delta Lake, Azure IoT Hub, Azure Event Hub, Power BI, Git, Azure DevOps</b></>,
			logo: [
				"/databricks.jpg",
				"/spark.webp",
				"/azure.png",
				"/raspberrypi.png",
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/IOT-Real-time-processing-with-Azure-Databricks",
		},
		{
			title: "Snowflake Data Vault 2.0",
			description:
				<>This project implements a scalable Data Vault 2.0 architecture on Snowflake, using the snowflake_sample_data.tpch_sf10 schema with millions of records across Customer, Orders, Region and Nation tables. It builds stages: Staging, Raw DV, Business DV and delivers a star schema dimensional model for analytics. Key components include SnowPipe, Streams and Tasks for near-real-time ingestion and transformation.<br /><br /> Tech stack: <b>Snowflake, SnowPipe, Streams, Tasks, SQL</b></>,
			logo: [
				"/snowflake.webp",
				"/datavault.png",
				"/database.jpg",
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/Snowflake_Data_Vault_2.0",
		},
		{
			title: "Movie Ticket DataWarehouse",
			description:
				<>This project focuses on building a data warehouse and generating insightful reports from a dataset of customer movie theater bookings within the United States. Dataset is taken from Kaggle and it includes 2 CSV files. The objective is to build a datawarehouse from the ground up, enabling users to extract meaningful business intelligence through the comprehensive reports.<br /><br /> Tech stack: <b>Microsoft SQL Server, SSIS, SSAS, SSRS, SQL, Power BI</b></>,
			logo: [
				"/sqlserver.jpg",
				"/model.png",
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara/MovieTicket-DataWarehouse",
		},
		{
			title: "SmartTemp: IOT Based Smart Temperature Predictor",
			description:
				<>IoT Based Temperature Prediction System: Designed and developed an IoT based system to monitor and predict ambient temperature, integrating sensors to collect real-time temperature data. Developed a motion based mechanism (gauge) to indicate temperature fluctuations to visualize current temperature readings. Time Series Forecasting: Utilized a time series algorithm to forecast temperature values for the next 30 days by leveraging historical seasonal temperature data to improve prediction accuracy.<br /><br /> Tech stack: <b>AWS, Postgres, EC2, Raspberry Pi, MQTT Broker, Python, SQL, Machine Learning</b></>,
			logo: [
				"/aws.png",
				"/kafka.png",
				"/mqtt.png",
				"/raspberrypi.png",
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara",
		},
		{
			title: "Bank Marketing Analysis and Loan Prediction System using Clustering and Classification",
			description:
				<>This project delivers a bank marketing and loan prediction system, integrating clustering and classification for customer segmentation and risk assessment. Campaign data is processed to extract insights while a predictive model estimates loan approval risks. A web interface enables real-time customer data input, supporting data-driven marketing, efficient decision-making and improved risk management.<br /><br /> Tech stack: <b>Python, SQL, Flask, REST, Machine Learning (Classification and Clustering), Heroku</b></>,
			logo: [
				"/tensorflow.png",
				"/flask.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			],
			linkText: "View Project",
			link: "https://github.com/NuwanKeshara",
		},
		
	],
};

export default INFO;
