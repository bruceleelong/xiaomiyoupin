var express = require("express");
var request = require("request");
var app = express();

// 专门处理post请求的
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
   
// parse application/json
app.use(bodyParser.json())

//app.post("/getnews", function(req, res) {
//	res.append("Access-Control-Allow-Origin", "*")
//	request('https://app.youpin.mi.com/app/shopv3/pipe', function(err, response, body) {
//		console.log(body)
//		res.send(body)
//	})
//})
//app.listen(9999)


app.post("/getnews", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*")
	request({
		method:'POST',
		url:'https://app.youpin.mi.com/app/shopv3/pipe'
	},function(err,result,body){
		console.log(body)
		res.send(body)
	})
})
app.listen(9999)