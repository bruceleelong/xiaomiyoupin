// Connection URL
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose')//查询mongodb的id会用到
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'xiaomiyoupin';
var crypto = require('crypto'); // 密码加密的模块

var ObjectID = require('mongodb').ObjectID; // 专门用来mongodb数据库中选择id的模块

var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// parse application/json
app.use(bodyParser.json());
//app.post('/test',function(req,res){
//	// 跨域
//	res.append("Access-Control-Allow-Origin","*");
//	res.send('hello world');
//})

// 用户注册
app.post('/registe', function(req, res) {
	// connection.connect(); //进行连接
	// 跨域
	res.append("Access-Control-Allow-Origin", "*");

	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		// console.log("Connected successfully to server");

		const db = client.db(dbName);

		// Get the documents collection
		const collection = db.collection('userdata');

		//密码加密
		var md5 = crypto.createHash('md5');
		md5.update(req.body.password);
		req.body.password = md5.digest('hex');

		// 查询数据库是否有前端输入的注册信息,没有则把信息写入数据库,有则显示账号已存在
		collection.find({
			username: req.body.username
		}).toArray(function(err, result) {
			if(err) {
				console.log('Error:' + err);
				return;
			}
			// console.log(result)
			// Insert some documents
			if(result.length === 0) { //把信息写入数据库
				collection.insertMany([req.body], function(err, result) {
					console.log([req.body]);
					res.send('注册成功');
					client.close(); //关闭数据库
				});
			} else {
				console.log(result);
				res.send('注册账号已存在');
			}
		});
	});
});

// 用户登录
app.post('/entry', function(req, res) {
	// connection.connect(); //进行连接
	// 跨域
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.body);

	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		// console.log("Connected successfully to server");

		const db = client.db(dbName);

		// Get the documents collection
		const collection = db.collection('username');

		//密码加密
		var md5 = crypto.createHash('md5');
		md5.update(req.body.password);
		req.body.password = md5.digest('hex');

		collection.find({
			username: req.body.username
		}).toArray(function(err, result) {
			if(err) {
				console.log('Error:' + err);
				return;
			}
			console.log(result);
			// res.send(result)
			//下面代码有问题
			if(req.body.username==='longxiang') {
				console.log(result);
				res.send('登录成功');
			} else {
				console.log(result);
				res.send('请注册后再登录');
				client.close(); //关闭数据库
			}
			//			if(result.length===0){
			//				res.send('请注册后再登录');
			//			}else{
			//				console.log(result);
			//				res.send('登录成功');
			//				client.close();//关闭数据库
			//			}
		})

	})
})

//把list列表的数据存储到数据库
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	// console.log("Connected successfully to server");

	const db = client.db(dbName);

	// Get the documents collection
	const collection = db.collection('goodslist');
	collection.insertMany(
		[{
			id: 1,
			img800: "https://img.youpin.mi-img.com/800_pic/66c98da4db8a03085fec8cb64f928c56.png",
			custom_summary: "空气热能幕墙，通电即热",
			custom_name: "乐秀踢脚线式电暖器",
			custom_price: 749
		}, {
			id: 2,
			img800: "https://img.youpin.mi-img.com/800_pic/a32f6e7b1166e28baa711b1f0e1b2eca.png",
			custom_name: "云米对开门冰箱 483L",
			custom_summary: "大而纤薄，冷而无霜",
			custom_price: 2399
		}, {
			id: 3,
			img800: "https://img.youpin.mi-img.com/800_pic/e6dbf6cc4eaa294c2906168bee746ad2.png",
			custom_name: "脑电波助眠眼罩",
			custom_summary: "来自灵魂的音乐，让你安然入睡",
			custom_price: 249
		}, {
			id: 4,
			img800: "https://img.youpin.mi-img.com/800_pic/3c52d2bce4a408c41ea2fe8f6e21bc1c.png",
			custom_name: "男式纯羊毛英伦风短款大衣",
			custom_summary: "抗皱保暖，挺括立体，时尚轮廓",
			custom_price: 699
		}, {
			id: 5,
			img800: "https://img.youpin.mi-img.com/800_pic/410d1b13da478451cd556d081c5d4b69.png",
			custom_name: "全棉多袋休闲长裤（WORK系列）",
			custom_summary: "宽松版型，舒适透气，多种穿法",
			custom_price: 199
		}, {
			id: 6,
			img800: "https://img.youpin.mi-img.com/800_pic/6983541682d3c48a9d8286597ace6020.png",
			custom_name: "婴幼儿隔尿护理垫",
			custom_summary: "加厚进口木浆棉，3D导流",
			custom_price: 39
		}, {
			id: 7,
			img800: "https://img.youpin.mi-img.com/800_pic/5aeadc51d3a52df503fe9b87edd1a988.png",
			custom_name: "云米智能茶几冰吧",
			custom_summary: "尽享客厅美好时光",
			custom_price: 2499
		}, {
			id: 8,
			img800: "https://img.youpin.mi-img.com/800_pic/cee339a3352e6c2fd77d77db3153fb8d.png",
			custom_name: "双重抗菌床垫保护垫",
			custom_summary: "双重呵护 整夜清新睡眠",
			custom_price: 79
		}, {
			id: 9,
			img800: "https://img.youpin.mi-img.com/800_pic/a4150832535b47bf4143d0fbfbc15b18.png",
			custom_name: "修身小直筒轻暖牛仔裤（男女款）",
			custom_summary: "法兰绒牛仔面料，牛仔洗水风格",
			custom_price: 229
		}, {
			id: 10,
			img800: "https://img.youpin.mi-img.com/800_pic/2ad9f9e881266a74912fbebc63765cc1.png",
			custom_name: "多功能自由组合柜",
			custom_summary: "天然竹制，双向开放，灵活组合",
			custom_price: 29
		}, {
			id: 11,
			img800: "https://img.youpin.mi-img.com/800_pic/3aec92223d6b8e5bd3927738a4889054.png",
			custom_name: "小米8 青春版",
			custom_summary: "镜面渐变色，2400万自拍旗舰",
			custom_price: 1399
		}, {
			id: 12,
			img800: "https://img.youpin.mi-img.com/800_pic/2d63d69d360304f493b43b3760f6cdbb.png",
			custom_name: "小米8 屏幕指纹版",
			custom_summary: "压感屏幕指纹，双频GPS",
			custom_price: 3199
		}, {
			id: 13,
			img800: "http://img.youpin.mi-img.com/800_pic/399_80484682e43563e0bc562d7389bfad30.png",
			custom_name: "小米米家电动滑板车",
			custom_summary: "30公里超长续航/双重刹车系统",
			custom_price: 1999
		}, {
			id: 14,
			img800: "http://img.youpin.mi-img.com/800_pic/75_f63e91bbdd9569e5ffa718ef03f4cd17.png",
			custom_name: "九号平衡车",
			custom_summary: "22公里超长续航",
			custom_price: 1999
		}, {
			id: 15,
			img800: "http://img.youpin.mi-img.com/800_pic/101284_588f824e5d275df174c855a2516e1e22.png",
			custom_name: "小米蓝牙项圈耳机",
			custom_summary: "项圈式设计，双单元声学架构",
			custom_price: 299
		}, {
			id: 16,
			img800: "https://img.youpin.mi-img.com/800_pic/3bda19351a96eec8b153ccbcde4ff508.png",
			custom_name: "小米无线充电器（通用快充版）",
			custom_summary: "Qi标准，支持MIX 2S快充",
			custom_price: 69
		}, {
			id: 17,
			img800: "https://img.youpin.mi-img.com/800_pic/45be66685c4dd9ec2b9088ae8a09e0e6.png",
			custom_name: "小米游戏本 第八代 15.6英寸",
			custom_summary: "全新第八代英特尔处理器",
			custom_price: 6499
		}, {
			id: 18,
			img800: "http://img.youpin.mi-img.com/800_pic/72eb46f14462624dc377d8b6df622d42.png",
			custom_name: "小米蓝牙语音遥控器",
			custom_summary: "语音智能搜片",
			custom_price: 99
		}, {
			id: 19,
			img800: "http://img.youpin.mi-img.com/800_pic/351_446f6b13f2bdc73b66243c3fde1b227c.png",
			custom_name: "小米便携鼠标",
			custom_summary: "轻薄便携，蓝牙连接",
			custom_price: 94
		}, {
			id: 20,
			img800: "https://img.youpin.mi-img.com/800_pic/60c2446d6f0608f0f8a83ddf1bd220d0.png",
			custom_name: "小米净水器 1A（厨下式）",
			custom_summary: "3合1强化滤芯，更小更省地儿",
			custom_price: 1499
		}, {
			id: 21,
			img800: "https://img.youpin.mi-img.com/800_pic/3ebd7b7e27eb55fc342d9e362ac74f89.png",
			custom_name: "90分旅行箱 1A",
			custom_summary: "德国拜耳PC材质，海关密码锁",
			custom_price: 299
		}, {
			id: 22,
			img800: "http://img.youpin.mi-img.com/800_pic/306_f327ad1722fe11b68a564fd900a26de8.png",
			custom_name: "新10000mAh小米移动电源2",
			custom_summary: "双USB接口输出，双向快充",
			custom_price: 79
		}, {
			id: 23,
			img800: "http://img.youpin.mi-img.com/800_pic/101433_6869fe311329bf9aa904f6e6def5374f.png",
			custom_name: "橙舍多层靠墙置物架",
			custom_summary: "多功能置物，斜靠造型，底部防滑，多场景适用",
			custom_price: 199
		}, {
			id: 24,
			img800: "http://img.youpin.mi-img.com/800_pic/102160_b3f2ddee3419c00e96a0bb7e4759d707.png",
			custom_name: "LOGO运动拖鞋",
			custom_summary: "防滑沟槽设计，人体工学脚床",
			custom_price: 29
		}, {
			id: 25,
			img800: "http://img.youpin.mi-img.com/800_pic/137_2jks0iviav3i4.png",
			custom_name: "8H天然乳胶床垫M1",
			custom_summary: "天然乳胶，0胶水环保材质",
			custom_price: 599
		}, {
			id: 26,
			img800: "http://img.youpin.mi-img.com/800_pic/228_6ad168cdaa24d4191a84dd53bd7e69a8.png",
			custom_name: "8H护颈乳胶枕Z2",
			custom_summary: "天然乳胶，三曲线护颈",
			custom_price: 239
		}, {
			id: 27,
			img800: "http://img.youpin.mi-img.com/800_pic/92fb71846bd86660223592d67a68715a.png",
			custom_name: "VH“悠”便携式手持风扇",
			custom_summary: "7羽叶设计/无刷马达/三档风力",
			custom_price: 45
		}, {
			id: 28,
			img800: "https://img.youpin.mi-img.com/800_pic/025be8d696d5562bab5fae6e53f3af67.png",
			custom_name: "米家插线板",
			custom_summary: "六版本可选",
			custom_price: 24.9
		}, {
			id: 29,
			img800: "http://img.youpin.mi-img.com/800_pic/a73143cd2ad81a8ea95a42f61d64076d.png",
			custom_name: "多功能抽屉式收纳盒",
			custom_summary: "双层置物,精简造型,多场景使用",
			custom_price: 99
		}, {
			id: 30,
			img800: "http://img.youpin.mi-img.com/800_pic/100636_59f796dd0630a3aabde72d01de8c0b34.png",
			custom_name: "乐范按摩助眠颈枕",
			custom_summary: "按摩解压，放松入眠，专利锁扣，收纳自如",
			custom_price: 99
		}, {
			id: 31,
			img800: "https://img.youpin.mi-img.com/800_pic/74a1df98604dd0735c25a456d6e9c919.png",
			custom_name: "莱克吉米无线冲洗枪",
			custom_summary: "无线便携设计，随时随地清洗",
			custom_price: 699
		}, {
			id: 32,
			img800: "https://img.youpin.mi-img.com/800_pic/6d3d040aed9652f8a3527b62e5319a10.png",
			custom_name: "小鲸洗智能马桶盖 Pro版",
			custom_summary: "富氧按摩，爽肤烘干，舒适坐感",
			custom_price: 1099
		}, {
			id: 33,
			img800: "https://img.youpin.mi-img.com/800_pic/76c6268e307fd71448c58bcbe2639fc2.png",
			custom_name: "云米电热水器 60L",
			custom_summary: "双管速热，安心沐浴，恒久温暖",
			custom_price: 1099
		}, {
			id: 34,
			img800: "http://img.youpin.mi-img.com/800_pic/101974_3rw9vco7sl2ij.png",
			custom_name: "睿米手持无线吸尘器",
			custom_summary: "送除螨刷，轻便大吸力，长久续航",
			custom_price: 1699
		}, {
			id: 35,
			img800: "https://img.youpin.mi-img.com/800_pic/e9688a1f1c69fb66b9c5f357a76fec00.png",
			custom_name: "云米滚筒洗衣机 8kg",
			custom_summary: "干净不伤衣，平稳不打扰",
			custom_price: 1699
		}, {
			id: 36,
			img800: "https://img.youpin.mi-img.com/800_pic/81653c050364bdc2f00551845c00ec02.png",
			custom_name: "维诺卡夫风冷恒温红酒柜",
			custom_summary: "广域恒温恒湿，光线阻隔，静音减震，国际品牌压缩机",
			custom_price: 1480
		}, {
			id: 37,
			img800: "https://img.youpin.mi-img.com/800_pic/07a7b7e4f45ccf734b0af079123f87de.png",
			custom_name: "云米十字四门冰箱",
			custom_summary: "486L大容量，风冷无霜，360°循环出风，智能app控制",
			custom_price: 2699
		}, {
			id: 38,
			img800: "https://img.youpin.mi-img.com/800_pic/03afc2c74ad06f1e56faea4d6b9d1e1a.png",
			custom_name: "云米燃气热水器 13L",
			custom_summary: "变频恒温，沐浴的每一刻都温暖",
			custom_price: 1099
		}, {
			id: 39,
			img800: "https://img.youpin.mi-img.com/800_pic/9cb87ac5da485c7ce0aa8b3472ca7182.png",
			custom_name: "莱克吉米除螨吸尘器",
			custom_summary: "强力拍打，除螨更彻底",
			custom_price: 299
		}, {
			id: 40,
			img800: "https://img.youpin.mi-img.com/800_pic/798bb9c54fa252a0faed94d3b4bd1f3d.png",
			custom_name: "莱克吉米手持无线吸尘器",
			custom_summary: "强劲大吸力，清洁更彻底",
			custom_price: 999
		}, {
			id: 41,
			img800: "https://img.youpin.mi-img.com/800_pic/8f65645770d87bee716f290ad94413c2.png",
			custom_name: "蓄热保暖空军夹克（男女款）",
			custom_summary: "高科技蓄热棉，4级防泼水",
			custom_price: 239
		}, {
			id: 42,
			img800: "https://img.youpin.mi-img.com/800_pic/2eb6a20cbd3fd0cfb352eb0671f98a12.png",
			custom_name: "单向导湿长袖T恤",
			custom_summary: "单向导湿，排汗速干，贴身保暖",
			custom_price: 169
		}, {
			id: 43,
			img800: "https://img.youpin.mi-img.com/800_pic/3db75e81d21898404bd35735506dc6d2.png",
			custom_name: "全棉重磅圆领卫衣（WORK行动系列）",
			custom_summary: "重磅纯棉，百搭有型，原创图案",
			custom_price: 149
		}, {
			id: 44,
			img800: "https://img.youpin.mi-img.com/800_pic/46ef2d9d05e1e9f2ea51f65ac6582c19.png",
			custom_name: "全棉重磅印花连帽卫衣（WORK系列）",
			custom_summary: "重磅纯棉，经典连帽，原创图案",
			custom_price: 169
		}, {
			id: 45,
			img800: "https://img.youpin.mi-img.com/800_pic/8ba41c6871dc96168561544fdbac61ed.png",
			custom_name: "基础秋衣秋裤套装（男款）",
			custom_summary: "立体裁剪，简约大气，柔软舒适",
			custom_price: 89
		}, {
			id: 46,
			img800: "https://img.youpin.mi-img.com/800_pic/d3310402e0f04a10565eb055bd48291c.png",
			custom_name: "针织抓绒卫裤 男女款",
			custom_summary: "立体包针凸绣工艺，加厚抓绒保暖",
			custom_price: 129
		}, {
			id: 47,
			img800: "https://img.youpin.mi-img.com/800_pic/6fd0f0f892ee54c86e0e8e165855d464.png",
			custom_name: "城市迷彩圆领卫衣（WORK系列）",
			custom_summary: "潮流迷彩，简单易搭，舒适有型",
			custom_price: 129
		}, {
			id: 48,
			img800: "https://img.youpin.mi-img.com/800_pic/35466fc26a525f561da86e9a3cc8183c.png",
			custom_name: "全棉素色连帽卫衣",
			custom_summary: "全棉精梳面料，经典百搭",
			custom_price: 129
		}, {
			id: 49,
			img800: "https://img.youpin.mi-img.com/800_pic/25fa2ca86ecf610d6a5b00c23b46a5ed.png",
			custom_name: "基础秋衣秋裤套装（女款）",
			custom_summary: "修身版型，优雅圆领，保暖舒适",
			custom_price: 89
		}, {
			id: 50,
			img800: "https://img.youpin.mi-img.com/800_pic/b83de7d2d49c209e8616b7ebc699cae2.png",
			custom_name: "刺绣针织圆领抓绒卫衣",
			custom_summary: "双层复合面料，立体包针凸绣工艺",
			custom_price: 129
		}, {
			id: 51,
			img800: "https://img.youpin.mi-img.com/800_pic/74354dcef5b47cb5bfa4a60d8a4bb993.png",
			custom_name: "COMO LIVING 铜纤维抗菌防螨保暖被",
			custom_summary: "铜基纤维，抗菌防螨，柔软轻盈",
			custom_price: 179
		}, {
			id: 52,
			img800: "http://img.youpin.mi-img.com/800_pic/100412_uh56g5lgtxos.png",
			custom_name: "3D七孔保暖被",
			custom_summary: "1:4:1优质填充，更轻更暖不压身",
			custom_price: 209
		}, {
			id: 53,
			img800: "http://img.youpin.mi-img.com/800_pic/100360_2w342lnm2q6u2.png",
			custom_name: "8H 95%白鹅绒静音被（冬款）",
			custom_summary: "95%大朵白鹅绒，防钻绒工艺",
			custom_price: 1399
		}, {
			id: 54,
			img800: "http://img.youpin.mi-img.com/800_pic/836107762158311e2cf62a20c9cc7416.png",
			custom_name: "8H天然蚕丝子母被",
			custom_summary: "100%天然蚕丝，四季可用",
			custom_price: 329
		}, {
			id: 55,
			img800: "https://img.youpin.mi-img.com/800_pic/74c32f77d4da2787f173e1bb5c470aaa.png",
			custom_name: "长绒棉暖绒四件套",
			custom_summary: "60支长绒棉，陶瓷温感起绒技术",
			custom_price: 419
		}, {
			id: 56,
			img800: "http://img.youpin.mi-img.com/800_pic/848_3kl6tgeb6djr2.png",
			custom_name: "光双宫茧桑蚕丝被（春秋款）",
			custom_summary: "舒适保暖，3斤/4斤可选",
			custom_price: 1099
		}, {
			id: 57,
			img800: "https://img.youpin.mi-img.com/800_pic/c6bf0f358d6cd3dd1dd142812a30f747.png",
			custom_name: "每晚澳大利亚羊毛床褥",
			custom_summary: "100%美利奴羊毛 久用不塌陷 ",
			custom_price: 279
		}, {
			id: 58,
			img800: "https://img.youpin.mi-img.com/800_pic/1ad1166686c428445e26b26bd6b95aab.png",
			custom_name: "每晚白鹅毛蓄热床褥",
			custom_summary: "自然蓄热，蓬松温暖",
			custom_price: 319
		}, {
			id: 59,
			img800: "https://img.youpin.mi-img.com/800_pic/2bcd3b155b08dbee3a8b9542b7e0d30d.png",
			custom_name: "智暖95％白鹅绒被",
			custom_summary: "超轻超暖分区白鹅绒，超柔静音",
			custom_price: 899
		}, {
			id: 60,
			img800: "https://img.youpin.mi-img.com/800_pic/f5579f64a3b8c71d11c6c55d7f9ed0bf.png",
			custom_name: "8H抗菌白鸭绒被 冬被",
			custom_summary: "90%白鸭绒，全棉防羽面料",
			custom_price: 699
		}, {
			id: 61,
			img800: "http://img.youpin.mi-img.com/800_pic/101422_1ee2jhwb4wxh6.png",
			custom_name: "反绒牛皮豆豆鞋",
			custom_summary: "丝柔感反绒牛皮，透气牛皮里面，分区按摩式鞋底",
			custom_price: 299
		}, {
			id: 62,
			img800: "http://img.youpin.mi-img.com/800_pic/102027_f7340c0a0267ea5a3604367b99adda67.png",
			custom_name: "玺佳机械表•MY系列",
			custom_summary: "德国iF设计金奖，镂空机械美学",
			custom_price: 999
		}, {
			id: 63,
			img800: "https://img.youpin.mi-img.com/800_pic/2d63d69d360304f493b43b3760f6cdbb.png",
			custom_name: "小米8 屏幕指纹版",
			custom_summary: "压感屏幕指纹，双频GPS",
			custom_price: 3199
		}, {
			id: 64,
			img800: "http://img.youpin.mi-img.com/800_pic/101284_588f824e5d275df174c855a2516e1e22.png",
			custom_name: "小米蓝牙项圈耳机",
			custom_summary: "项圈式设计，双单元声学架构",
			custom_price: 299
		}, {
			id: 65,
			img800: "http://img.youpin.mi-img.com/800_pic/101975_c42c1253d0e0eb4ce9b2b7c733d672be.png",
			custom_name: "ZMI 无线充电器（套装版）",
			custom_summary: "多协议快充，智能识别",
			custom_price: 119
		}, {
			id: 66,
			img800: "https://img.youpin.mi-img.com/800_pic/4fd0aaefd6d07a39737681312bc90a75.png",
			custom_name: "炽魂游戏机械键盘 青春版",
			custom_summary: "Cherry机械轴，全键无冲",
			custom_price: 399
		}, {
			id: 67,
			img800: "https://img.youpin.mi-img.com/800_pic/427551af639f9efa1259ffb094be8d2f.png",
			custom_name: "超纤PU贴皮篮球",
			custom_summary: "“掌”控全场，做你的MVP",
			custom_price: 169
		}, {
			id: 68,
			img800: "http://img.youpin.mi-img.com/800_pic/102005_21lt83h2xx968.png",
			custom_name: "轻质植鞣皮低帮板鞋",
			custom_summary: "质感植鞣皮，抗菌防臭",
			custom_price: 339
		}, {
			id: 69,
			img800: "https://img.youpin.mi-img.com/800_pic/8f31cf7ba472d52d863de8e7ebbe6097.png",
			custom_name: "INSAIT JOY茵战智能足球",
			custom_summary: "视频录制分享，优质控球体验",
			custom_price: 499
		}, {
			id: 70,
			img800: "http://img.youpin.mi-img.com/800_pic/102217_0602863e06d8a437831a20b9009e2e22.png",
			custom_name: "太阳镜飞行员款",
			custom_summary: "纯钛镜架，尼龙偏光镜片",
			custom_price: 499
		}, {
			id: 71,
			img800: "https://img.youpin.mi-img.com/800_pic/de8a43a088a352efcbf39f168448c934.png",
			custom_name: "声波洁面仪",
			custom_summary: "深层清洁,细腻洁面,舒缓肌肤",
			custom_price: 109
		}, {
			id: 72,
			img800: "http://img.youpin.mi-img.com/800_pic/102366_94910d8287c7594447087a5522071b21.png",
			custom_name: "轻盈无瑕气垫BB霜",
			custom_summary: "轻盈无暇 养肤提亮",
			custom_price: 79
		}, {
			id: 73,
			img800: "https://img.youpin.mi-img.com/800_pic/180c16d38d9c0bb1ef401bae0f4221f2.png",
			custom_name: "水晶石英腕表",
			custom_summary: "轻奢水晶元素，瑞士进口机芯",
			custom_price: 369
		}, {
			id: 74,
			img800: "https://img.youpin.mi-img.com/800_pic/3aec92223d6b8e5bd3927738a4889054.png",
			custom_name: "小米8 青春版",
			custom_summary: "镜面渐变色，2400万自拍旗舰",
			custom_price: 1399
		}, {
			id: 75,
			img800: "http://img.youpin.mi-img.com/800_pic/840_3m8foovc4dbj6.png",
			custom_name: "云麦好轻mini2智能体脂秤",
			custom_summary: "17项数据 精准交流测脂 高清LED显示屏 已接入米家APP",
			custom_price: 99
		}, {
			id: 76,
			img800: "https://img.youpin.mi-img.com/800_pic/e5393589651b2baee0559333b4d120bb.png",
			custom_name: "“圆满”足金手镯",
			custom_summary: "仿古法手工，复古时尚，经典传承",
			custom_price: 4999
		}, {
			id: 77,
			img800: "http://img.youpin.mi-img.com/800_pic/274513ef40578133f45b9ab4a4854274.png",
			custom_name: "PMA石墨烯发热真丝暖宫宝",
			custom_summary: "暖腹宝，痛经不再是多喝热水",
			custom_price: 169
		}, {
			id: 78,
			img800: "http://img.youpin.mi-img.com/800_pic/101949_feb14119a3eb03087163e9c78ddb983c.png",
			custom_name: "钻石珐琅心形18K金项链",
			custom_summary: "满钻效果，双面可戴",
			custom_price: 1159
		}, {
			id: 79,
			img800: "http://img.youpin.mi-img.com/800_pic/845_2i4u83rcvnd4w.png",
			custom_name: "云麦好轻mini2体脂秤 云麦2代瑜伽垫 套装",
			custom_summary: "十项数据，精准交流测脂，高清LED显示屏，已接入米家APP",
			custom_price: 179
		}, {
			id: 80,
			img800: "http://img.youpin.mi-img.com/800_pic/101900_3su9rodgvilrb.png",
			custom_name: "经典闪耀钻戒",
			custom_summary: "比利时亮式切割，显钻设计",
			custom_price: 4349
		}, {
			id: 81,
			img800: "http://img.youpin.mi-img.com/800_pic/100617_179oquvgk60aq.png",
			custom_name: "和厨番茄鸡蛋冻干面",
			custom_summary: "非油炸冻干技术，新鲜口感， 汤汁浓郁",
			custom_price: 59.9
		}, {
			id: 82,
			img800: "https://img.youpin.mi-img.com/800_pic/da3389a9a82a72257357b1df8acdce9c.png",
			custom_name: "炫彩小背包",
			custom_summary: "4级防泼水，10L容量",
			custom_price: 29
		}, {
			id: 83,
			img800: "http://img.youpin.mi-img.com/800_pic/129_0c5842a5e5b127e493517075187c8156.png",
			custom_name: "小米移动电源10000mAh高配版",
			custom_summary: "双向快充，仅12.58mm薄",
			custom_price: 149
		}, {
			id: 84,
			img800: "http://img.youpin.mi-img.com/800_pic/3b0291da429f5c6b730fc1530b408215.png",
			custom_name: "极蜂天文望远镜",
			custom_summary: "90mm物镜口径/高分辨率成像/天地两用/连接手机拍照",
			custom_price: 1199
		}, {
			id: 85,
			img800: "http://img.youpin.mi-img.com/800_pic/55b3ecb7cb994c5f1b7b8c1812cf9227.png",
			custom_name: "极蜂强光变焦手电筒",
			custom_summary: "CREE 1000流明进口灯珠",
			custom_price: 149
		}, {
			id: 86,
			img800: "https://img.youpin.mi-img.com/800_pic/07603b5a4d80ca1f0186ddb5b874a510.png",
			custom_name: "极蜂智能数字对讲机 ",
			custom_summary: "语音回放/高发射功率/支持蓝牙耳机/手机写频",
			custom_price: 599
		}, {
			id: 87,
			img800: "https://img.youpin.mi-img.com/800_pic/5e0627e4f3d2df4d4305b669c96417b4.png",
			custom_name: "极蜂双筒望远镜",
			custom_summary: "8倍黄金倍率，超宽带多层镀膜，IP67级充氮防水",
			custom_price: 299
		}, {
			id: 88,
			img800: "http://img.youpin.mi-img.com/800_pic/eb8a78bd2236feb2a12bee12521e678c.png",
			custom_name: "早风多用全自动帐篷",
			custom_summary: "一提即可搭建/UPF50+双重防晒/超大帐内空间/一顶帐篷多种用法",
			custom_price: 299
		}, {
			id: 89,
			img800: "http://img.youpin.mi-img.com/800_pic/101627_25b7qqyeqcjs5.png",
			custom_name: "早风户外双层速开帐篷",
			custom_summary: "3秒搭建，超大空间，防雨防潮，立体通风透气",
			custom_price: 229
		}, {
			id: 90,
			img800: "https://img.youpin.mi-img.com/800_pic/369bc6f5850e3f3ecdf3a3e91c46c804.png",
			custom_name: "早风户外折叠桌",
			custom_summary: "加大桌面，稳固支撑，优质铝合金，轻巧便携",
			custom_price: 249
		}, {
			id: 91,
			img800: "http://img.youpin.mi-img.com/800_pic/101240_1vtnefo3ejel1.png",
			custom_name: "乔治威拿·罗蒂丘·宝龙干红葡萄酒",
			custom_summary: "罗蒂丘代表酒庄 法国2200年历史产区",
			custom_price: 649
		}, {
			id: 92,
			img800: "http://img.youpin.mi-img.com/800_pic/100978_a0839af2eddb8307a8d76dd4f334ddf9.png",
			custom_name: "洁净免洗 1号黑茶",
			custom_summary: "洁净免洗，营养丰富，科学重塑",
			custom_price: 169
		}, {
			id: 93,
			img800: "https://img.youpin.mi-img.com/800_pic/9e3b18b8205f6e1b287cc528269b1f75.png",
			custom_name: "阳澄湖大闸蟹（礼盒礼卡可选）",
			custom_summary: "出口品质，生态养殖，鲜活4对装",
			custom_price: 218
		}, {
			id: 94,
			img800: "http://img.youpin.mi-img.com/800_pic/102346_e9bcc06ba68ab2e17d01f71fa743158a.png",
			custom_name: "一支好参（干海参速发型）",
			custom_summary: "营养便携，泡发简单",
			custom_price: 368
		}, {
			id: 95,
			img800: "https://img.youpin.mi-img.com/800_pic/c8eb70764204557e929ed2a58cbc3ff5.png",
			custom_name: "沃格尔混合麦片 400g/盒",
			custom_summary: "新西兰进口，丰富原料，均衡配比",
			custom_price: 39
		}, {
			id: 96,
			img800: "https://img.youpin.mi-img.com/800_pic/0230f76974b6c7504611a139176ce499.png",
			custom_name: "南美进口整肉原切牛肉块",
			custom_summary: "真味牛肉，一次吃个够",
			custom_price: 129
		}, {
			id: 97,
			img800: "https://img.youpin.mi-img.com/800_pic/71ef08aeffcab5eef6906bf0cbdbe3f4.png",
			custom_name: "极简珍珠项链",
			custom_summary: "AKOYA海水珍珠，18K金",
			custom_price: 899
		}, {
			id: 98,
			img800: "http://img.youpin.mi-img.com/800_pic/101900_3su9rodgvilrb.png",
			custom_name: "经典闪耀钻戒",
			custom_summary: "比利时亮式切割，显钻设计",
			custom_price: 4349
		}, {
			id: 99,
			img800: "https://img.youpin.mi-img.com/800_pic/180c16d38d9c0bb1ef401bae0f4221f2.png",
			custom_name: "水晶石英腕表",
			custom_summary: "轻奢水晶元素，瑞士进口机芯",
			custom_price: 369
		}, {
			id: 100,
			img800: "http://img.youpin.mi-img.com/800_pic/101427_23jv61c96b1p.png",
			custom_name: "牛皮水桶包(赠配包）",
			custom_summary: "美国进口优质皮胚，七十三道手作工艺，可调节肩带",
			custom_price: 399
		}, {
			id: 101,
			img800: "http://img.youpin.mi-img.com/800_pic/100622_7c82677aaaa8aaa0c2a42815cdf84192.png",
			custom_name: "鹿客智能指纹锁Classic",
			red_words: "【网红爆品，好评破万】",
			custom_price: 1699
		}, {
			id: 102,
			img800: "http://img.youpin.mi-img.com/800_pic/102495_f26f63c454077cbf2a8723fa61898816.png",
			custom_name: "云米洗烘一体机 8kg",
			custom_summary: "衣服洗净即烘干，无需晾晒直接穿",
			custom_price: 2599
		}, {
			id: 103,
			img800: "https://img.youpin.mi-img.com/800_pic/f7ab44b2ee63d5ccde9e3e8d0a5619c8.png",
			custom_name: "石头扫地机器人",
			custom_summary: "扫拖一体，清扫性能更强！",
			custom_price: 2499
		}, {
			id: 104,
			img800: "http://img.youpin.mi-img.com/800_pic/ba3dde926973d829cb46fef1a4f57334.png",
			custom_name: "小米8",
			custom_summary: "骁龙845处理器，双频GPS",
			custom_price: 2499
		}, {
			id: 105,
			img800: "https://img.youpin.mi-img.com/800_pic/be45b6138208fd1862a36a316e11f395.png",
			custom_name: "乳胶弹簧静音床垫",
			custom_summary: "20厘米厚度，独立袋装弹簧支撑",
			custom_price: 1599
		}, {
			id: 106,
			img800: "http://img.youpin.mi-img.com/800_pic/a61016fbc9aae9a18ef0bde46c56f80d.png",
			custom_name: "小米AI音箱",
			custom_summary: "听音乐、语音遥控家电的人工智能音箱",
			custom_price: 299
		}, {
			id: 107,
			img800: "http://img.youpin.mi-img.com/800_pic/100578_3fspe9cnnsk3.png",
			custom_name: "云米智能烟灶套装",
			custom_summary: "烟灶相互联动，自动排风",
			custom_price: 2699
		}, {
			id: 108,
			img800: "http://img.youpin.mi-img.com/800_pic/101475_1btwx5ygi55sw.png",
			custom_name: "智米全直流变频空调",
			custom_summary: "一级能效，强劲冷暖",
			custom_price: 4399
		}, {
			id: 109,
			img800: "http://img.youpin.mi-img.com/800_pic/101585_34bgob8taj4b2.png",
			custom_name: "WalkingPad走步机",
			custom_summary: "新型对折收纳，脚感控制速度",
			custom_price: 1999
		}, {
			id: 110,
			img800: "https://img.youpin.mi-img.com/800_pic/f0e8202b192d68731248ff23f4294623.png",
			custom_name: "米物蓝牙双模键盘",
			custom_summary: "2种连接，1键切换，支持多系统",
			custom_price: 249
		}]
	)

	client.close();
})

// 根据列表页传入的id获取数据库对应的数据并返回给前端(代码有问题)
//app.get('/detail', function(req, res) {
//	// connection.connect(); //进行连接
//	// 跨域
//	res.append("Access-Control-Allow-Origin", "*");
//
//	MongoClient.connect(url, function(err, client) {
//		assert.equal(null, err);
//		// console.log("Connected successfully to server");
//
//		const db = client.db(dbName);
//
//		// Get the documents collection
//		const collection = db.collection('goodslist');
//		collection.find({
//			'_id':mongoose.Types.ObjectId(req.query.goodslist[0].id)
//
//		}).toArray(function(err, result) {
//			if(err) {
//				console.log('Error:' + err);
//				return;
//			}
//			if(result.length > 0) {
//				res.send(result);
//				console.log(result);
//			}
//
//		})
//	})
//})
app.listen(7000);