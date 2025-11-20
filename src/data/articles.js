const myArticles = [
	// The Art of Designing Scalable Data Systems
	function() {
		return {
		date: "20 November 2025",
		title: "The Art of Designing Scalable Data Systems",
		description:
			"I recently started reading ‘Designing Data-Intensive Applications’ and these first 03 chapters gave me a solid foundation about what modern data systems really try to solve. As a data engineer it helped me understand why systems behave the way they do and what trade-offs engineers constantly deal with.",
		link: "https://medium.com/@nuwankeshara12/the-art-of-designing-scalable-data-systems-51291bde594e"
		};
	},

	// Data Quality Checks — Part 1
	function() {
		return {
		date: "13 October 2025",
		title: "Data Quality Checks — Part 1",
		description:
			"As data engineers, we are not just responsible for moving data from point A to point B. Our real job is to make sure that what arrives at point B is accurate, complete and reliable. Poor data quality leads to broken dashboards, misleading analytics and wrong business decisions. That is why data quality checks are a critical part of every modern data pipeline. In this blog post we are going to discuss, what quality checks we should focus on when building a data pipeline.",
		link: "https://medium.com/@nuwankeshara12/data-quality-checks-part-1-394c7828903e"
		};
	},

	// Star Schema to Snowflake Schema
	function() {
		return {
		date: "19 September 2025",
		title: "When to Move from Star Schema to Snowflake Schema",
		description:
			"Star schema is the go to design for most data warehouses because it’s simple, fast and easy to query. But there are times when a pure star schema just is not enough. In those cases you may need to breaking dimensions into separate tables and go for snowflake schema. In this post I will use a product sales dataset as an example and go through 2 scenarios where you should consider moving from star schema to snowflake schema.",
		link: "https://medium.com/@nuwankeshara12/when-to-move-from-star-schema-to-snowflake-schema-2d3a7ca60eae"
		};
	},

	// 1. 10 Advanced Spark Optimization Techniques 
	function() {
		return {
		date: "1 September 2025",
		title: "10 Advanced Spark Optimization Techniques",
		description:
			"Apache Spark is very powerful but running huge jobs efficiently requires more optimizing than the default settings. If you are only relying on default configurations, you could be faced with long execution times, high resource utilization and even job failures. In this post, I will go through 10 advanced level optimization techniques to squeeze optimal performance out of Spark.",
		link: "https://medium.com/@nuwankeshara12/10-advanced-spark-optimization-techniques-b58d7f05537c"
		};
	},

	// 2. IoT Real-time processing with Azure Databricks
	function() {
		return {
		date: "26 March 2025",
		title: "IoT Real-time processing with Azure Databricks",
		description:
			"This project focused on building a data pipeline to ingest and process IoT weather data, storing it in an Azure Databricks data Lakehouse using the Delta format and the Medallion Architecture. Finally, Power BI was used to visualize the data for analysis.",
		link: "https://medium.com/@nuwankeshara12/iot-real-time-processing-with-azure-databricks-1bd4da25f528"
		};
	},

	// 3. Snowflake Data Vault 2.0
	function() {
		return {
			date: "1 September 2025",
			title: "Snowflake Data Vault 2.0",
			description: "This project focused on the redesign and implementation of a robust and scalable data warehouse solution utilizing the Data Vault 2.0 methodology within the Snowflake cloud data platform.",
			link: "https://medium.com/@nuwankeshara12/snowflake-data-vault-2-0-6ceaf25e22ba"
		};
	},

	// Python built in methods
	function() {
		return {
			date: "03 February 2024",
			title: "Python: A Guide to Essential Python Built-in Methods",
			description: "Python, known for its simplicity and readability, comes equipped with a rich set of built-in methods that form the backbone of the language. These methods provide powerful functionalities, making Python a versatile and efficient programming language. In this blog, we’ll discuss Python’s built-in methods, demonstrating how they can be harnessed to streamline your code.",
			link: "https://medium.com/@nuwankeshara12/python-useful-python-built-in-methods-dfce07e54900"
		};
	},

	// SQL Mastery: Views, Stored Procedures and Triggers
	function() {
		return {
			date: "03 February 2024",
			title: "SQL Mastery: Views, Stored Procedures, Triggers",
			description: "In this blog post, I walk through the fundamentals of SQL by demonstrating how to create and use views, stored procedures and triggers showing both simple and advanced examples, parameter passing, transaction control and conditional logic with the aim of helping developers master these powerful database constructs.",
			link: "https://medium.com/@nuwankeshara12/sql-mastery-write-views-stored-procedures-triggers-b7d8d1bb11c7"
		};
	},

	// 4. Dimensional Modeling: Types of Different Dimensions and Fact Tables
	function() {
		return {
			date: "02 February 2024",
			title: "Dimensional Modeling: Types of Different Dimensions and Fact Tables",
			description: "Hi all, in this discussion, we aim to understand the various types of dimensions and fact tables that exist in a data warehouse. It’s important to note that we will focus on discussing the main types of dimensions and facts frequently used in dimensional data modeling solutions.",
			link: "https://medium.com/@nuwankeshara12/dimensional-modeling-types-of-different-dimensions-and-fact-tables-392206f987ee"
		};
	},

	// 5. Dimensional Modeling: Slowly Changing Dimension(SCD) Types
	function() {
		return {
			date: "03 February 2024",
			title: "Dimensional Modeling: Slowly Changing Dimension(SCD) Types",
			description: "Imagine managing a library with constantly evolving books. Authors change, titles get updated, and genres shift. Keeping track of it all can be chaotic. This is the core challenge faced by data warehouses: how to handle changing dimensions in a sea of ever evolving information. This is where Slowly Changing Dimension (SCDs) comes in, acting as librarians recording the history and dimension changes",
			link: "https://medium.com/@nuwankeshara12/dimensional-modeling-slowly-changing-dimension-scd-types-ee6adb91e10f"
		};
	},

	// 6. SQL Mastery: Advanced SQL Concepts
	function() {
		return {
			date: "02 February 2024",
			title: "SQL Mastery: Advanced SQL Concepts",
			description: "Hi all, In here we’ll dive into 04 powerful tools that can elevate your SQL skills to new heights.\n\nCommon Table Expressions (CTE)\nRecursive Common Table Expressions\nCase When Statements\nWindow Functions",
			link: "https://medium.com/@nuwankeshara12/sql-mastery-advanced-sql-concepts-d4fb723c2b3a"
		};
	}
];


export default myArticles;
