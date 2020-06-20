/* DB Info */
const config = {
		user: process.env.NODE_ORACLEDB_USER || "grapefruit",
		password: process.env.NODE_ORACLEDB_PASSWORD || "increpas",
		connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl"
}

module.exports = config;