var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post('/list',function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	request("https://m.youpin.mi.com/app/shopv3/pipe",function(err,result,body){
		//之前不显示数据是因为"https://home.mi.com/homepage/main/v1002"后面带了参数.
		console.log(body);
		res.send(body)
	})
})
app.listen(5000);
