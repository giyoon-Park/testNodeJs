var request = require("request");

const addr = {
		url: "http://book.interpark.com/api/recommend.api",
		method: 'POST',
		qs: {
			key: '756476FCE177C662B901F60050D436CDFFDF8BCC7C44966D95B67471225CF8EF',
			categoryId: null,
			output: 'json'
		},
		json: true
};
function api(arr){
	for(var i = 0 ; i < arr.length ; i++ ){
		addr.qs.categoryId = arr[i];
		
		request(addr, function(err, response, body){
			console.log(body.item);
			console.log(body.searchCategoryId);
			console.log(body.item[0].title);
		});
	}
	
}

module.exports = api;