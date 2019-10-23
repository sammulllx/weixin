//index.js
//获取应用实例
//1
const app = getApp()
var util = require('../../utils/util.js')

// console.log(util)

Page({
  data: {
    scanurl: ""   , //货架信息
	time:"",
	'test':1
    
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    this.onShow();
  },
  onShow(){
	  console.log(this.test);
	  
  
  },
  // 控件处理程序
  controltap() {
    // 二维码控件处理
      wx.scanCode({
        success: (res) => {
			console.log("扫码结果");
			  console.log(typeof(res.result));
        
			  // this.setData({
			  //  scanurl: res.result
			  // })
			  // console.log(scanurl)
			  // if(re.length>3)
			  // {
			   wx.navigateTo({
			   url:res.result,
			  }
			   )
			   }
      
          ,
           
        
        fail: (res) => {    
			console.log('scan    qrcode    fail')
        }
      })
  },
   /**
   * 获得货架信息
 
  /**
   * 获得商品信息
   */
 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad:function(){
    // var myDate = new Date();//获取系统当前时间
    // console.log(myDate.getSeconds())
	var TIME = util.formatTime(new Date());
	
	this.setData({
	
	time: TIME,
	 
	});
	console.log(TIME);
	var that = this;
	 var testvar = {
	  name: "zxin",
	  testfun3: function() {
	   console.log(this.name);
	   console.log(that.test)
	  }
	 }
	 testvar.testfun3();
  }
  //判断扫码的得到的货架 与本地存储的货架是不是同一个货架

})
