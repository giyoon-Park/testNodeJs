/* DB Info */
const config = {
		user: process.env.NODE_ORACLEDB_USER || "grapefruit",
		password: process.env.NODE_ORACLEDB_PASSWORD || "increpas",
		connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",
		doRelease: function(connection, userlist){
			connection.close(function(err){
				if(err){
					consle.error(err.message);
				}
				
				// DB종료까지 모두 완료되었을 시 최종적으로 응답 데이터 반환
				console.log('list size: ' + userlist.length);
				
				for (var i = 0; i < userlist.length; i++) {
					console.log('name: ' + userlist[i][1]);
				}
				
				response.send(userlist);
			});
		}
}

module.exports = config;