var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/detail',function(req,res){
	res.append("Access-Control-Allow-Origin","https://app.youpin.mi.com");
	console.log(req.body);
	res.send(JSON.stringify(req.body))
})

app.listen(3000);
