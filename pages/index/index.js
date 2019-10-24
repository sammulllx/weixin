//index.js
//获取应用实例
var API_URL = 'http://10.8.0.2:7300/mock/5da2c54af1d8446a011f6092/suyuanxcy/wxindex#!method=get';
Page({
  data: {
  	grids:[],
	imgUrls:[],
	indicatorDots: true,
	autoplay: true,
	interval: 5000,
	duration: 500,
	circular: true,
	topPicData:[],
	mainPicData:[],
	goods:[],
  },
  onLoad:function (){
  	var that = this;
  	wx.showToast({
  		title:"加载中...",
  		icon:"loading",
  		duration:10000
  	});

  	wx.request({
  		url:API_URL,
  		data:{},
  		header:{
        'Content-Type': 'json'
  		},
  		success:function (res){
        console.log(res);
		console.log(res.data)
  			wx.hideToast();
  			var data = res.data.data;
  			console.log(data);
  			that.setData({
				grids:data.grids,
				imgUrls:data.imgUrls,
				topPicData:data.topPicData,
				mainPicData:data.mainPicData,
				goods:data.goods,
  				
  			});
  		}
  	});
  }
})