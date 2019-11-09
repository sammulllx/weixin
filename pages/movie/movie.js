var API_URL = "http://api.zysuyuan.cn:8031/api/item/medicinalInf/list/viewdetail?mname=";
import wxCharts from '../../utils/wxcharts-min.js';//文件引用
Page({
	data:{
	grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    movie: {},
	imgUrls: [
			      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3207351738,960208689&fm=26&gp=0.jpg',
			      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571127992588&di=23b19c89cb12781722a80d17dad9f6f5&imgtype=0&src=http%3A%2F%2Fimage.lssp.com%2F234299%2Fimages%2F201412081107054835.jpg',
			      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571127992580&di=7d9f269f8c3b0fffacd3b92068b718c7&imgtype=0&src=http%3A%2F%2Fimg66.zyzhan.com%2F9%2F20160301%2F635924383993366398180.jpg'
			    ],
	    indicatorDots: true,
	    autoplay: true,
	    interval: 5000,
	    duration: 500,
	    circular: true,
	},
	call: function (e) {
	  
	  wx.makePhoneCall({
	    phoneNumber: '13702381330'
	  });
	},
	gotobase : function(){
	  let plugin = requirePlugin('routePlan');
	  let key = 'YWTBZ-NZW6P-6PWDI-L562P-YLCJO-3OFXH';  //使用在腾讯位置服务申请的key
	  let referer = 'sammul';   //调用插件的app的名称
	  let endPoint = JSON.stringify({  //终点
	    'name': '茂名',
	    'latitude': 21.67,
	    'longitude': 110.63
	  });
	  wx.navigateTo({
	    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
	  });
	
	},
	onLoad:function (params){
		 console.log(params);
		 console.log(API_URL+params.m_name)
		var that = this;
		wx.request({
		  url: API_URL+params.m_name, 
		  data: {},
		  header: {
        'Content-Type': 'json'
		  },
		  success: function(res) {
			  console.log(res)
			  // console.log(res.data)
		    // console.log(res.data.concat)
			// console.log(res.data['0'])
			// console.log(res.data["concat"])
			
			
		    that.setData({
		    	movie: res.data[0]
		    });
		  }
		})
		new wxCharts({
		  animation: true,
		  canvasId: 'pieCanvas',
		  type: 'pie',
		  series: [{
		    name: '成交量1',
		    data: 15,
		  }, {
		    name: '成交量2',
		    data: 35,
		  }, {
		    name: '成交量3',
		    data: 78,
		  }],
		  width: 300,
		  height: 300,
		})
		//圆环图
		new wxCharts({
		  animation: true,
		  canvasId: 'ringCanvas',
		  type: 'ring',
		  extra: {
		    ringWidth: 25,
		    pie: {
		      offsetAngle: -45
		    }
		  },
		  title: {
		    name: '70%',
		    color: '#7cb5ec',
		    fontSize: 25
		  },
		  subtitle: {
		    name: '收益率',
		    color: '#666666',
		    fontSize: 15
		  },
		  series: [{
		    name: '成交量1',
		    data: 15,
		    stroke: false
		  }, {
		    name: '成交量2',
		    data: 35,
		    stroke: false
		  }, {
		    name: '成交量3',
		    data: 78,
		    stroke: false
		  }, {
		    name: '成交量4',
		    data: 63,
		    stroke: false
		  }],
		  disablePieStroke: true,
		  width: 300,
		  height: 300,
		  dataLabel: false,
		  legend: false,
		  padding: 0
		})
		//线图
		new wxCharts({
		  canvasId: 'lineCanvas',
		  type: 'line',
		  categories: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10'],
		  animation: true,
		  series: [{
		    name: '光照强度(Lux)',
		    data: [12, 10, 18, 16, 19, 13, 11, 10, 15, 14],
		    format: function (val, name) {
		      return val.toFixed(2) ;
		    }
		  }],
		  xAxis: {
		    disableGrid: true
		  },
		  yAxis: {
		    title: '光照强度 (Lux)',
		    format: function (val) {
		      return val.toFixed(2);
		    },
		    min: 0
		  },
		  width: 300,
		  height: 300,
		  dataLabel: false,
		  dataPointShape: true,
		  extra: {
		    lineStyle: 'curve'
		  }
		})
		//柱形图
		new wxCharts({
		  canvasId: 'columnCanvas',
		  type: 'column',
		  animation: true,
		  categories: ['2014', '2015', '2016', '2017'],
		  series: [{
		    name: '成交量',
		    data: [15, 20, 45, 37],
		    format: function (val, name) {
		      return val.toFixed(2) + '万';
		    }
		  }],
		  yAxis: {
		    format: function (val) {
		      return val + '万';
		    },
		    title: 'Column',
		    min: 0
		  },
		  xAxis: {
		    disableGrid: false,
		    type: 'calibration'
		  },
		  extra: {
		    column: {
		      width: 15
		    }
		  },
		  width: 300,
		  height: 200,
		});
		//区域图
		new wxCharts({
		  canvasId: 'areaCanvas1',
		  type: 'area',
		  categories: ['1', '2', '3', '4', '5', '6'],
		  animation: true,
		  series: [{
		    name: '土壤温度',
		    data: [32, 15, 21, 29, 12, 29],
		    format: function (val) {
		      return val.toFixed(2);
		    }
		  }, {
		    name: '空气温度',
		    data: [15, 20, 35, 22, 4, 21],
		    format: function (val) {
		      return val.toFixed(2);
		    },
		  }],
		  yAxis: {
		    title: '温度 (摄氏度)',
		    format: function (val) {
		      return val.toFixed(2);
		    },
		    min: 0,
		    fontColor: '#8085e9',
		    gridColor: '#8085e9',
		    titleFontColor: '#f7a35c'
		  },
		  xAxis: {
		    fontColor: '#7cb5ec',
		    gridColor: '#7cb5ec'
		  },
		  extra: {
		    legendTextColor: '#cb2431'
		  },
		  width: 300,
		  height: 250
		});
		new wxCharts({
		  canvasId: 'areaCanvas2',
		  type: 'area',
		  categories: ['1', '2', '3', '4', '5', '6'],
		  animation: true,
		  series: [{
		    name: '土壤湿度',
		    data: [32, 45, 14, 56, 33, 34],
		    format: function (val) {
		      return val.toFixed(2);
		    }
		  }, {
		    name: '空气湿度',
		    data: [15, 20, 45, 37, 34, 22],
		    format: function (val) {
		      return val.toFixed(2);
		    },
		  }],
		  yAxis: {
		    title: '湿度',
		    format: function (val) {
		      return val.toFixed(2);
		    },
		    min: 0,
		    fontColor: '#8085e9',
		    gridColor: '#8085e9',
		    titleFontColor: '#f7a35c'
		  },
		  xAxis: {
		    fontColor: '#7cb5ec',
		    gridColor: '#7cb5ec'
		  },
		  extra: {
		    legendTextColor: '#cb2431'
		  },
		  width: 300,
		  height: 250
		});
		//雷达图
		new wxCharts({
		  canvasId: 'radarCanvas',
		  type: 'radar',
		  categories: ['3', '4', '5', '6', '7', '8'],
		  series: [{
		    name: '土壤ph值',
		    data: [30, 21, 43, 95, 160, 80]
		  }],
		  width: 300,
		  height: 200,
		  extra: {
		    radar: {
		      max: 150
		    }
		  }
		});
	}
});