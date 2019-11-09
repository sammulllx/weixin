import wxCharts from '../../utils/wxcharts-min.js';//文件引用
let chart = null;
Page({
	data:{
	grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
    movie: {
      name:'使君子',
      oname:'舀求子、四君子、史君子',
      sname:'Quisqualis indica L.',
      where:'清远一号园区',
      summary: '使君子（学名：Quisqualis indica L.）是使君子科使君子属植物。攀援灌木，叶对生，椭圆形，两面均被灰白色柔毛。穗状花序，倒挂下垂。花期夏秋。果有五棱，熟时黑色，种子白色'}
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
	  
	
	onLoad(){  
		  console.log('跳转至detail');
		  console.log('哈哈哈哈');
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
		    categories: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10'],
		    animation: true,
		    series: [{
		      name: '成交量1',
		      data: [12, 10, 18, 16, 19, 13, 11, 10, 15, 14],
		      format: function (val, name) {
		        return val.toFixed(2) + '万';
		      }
		    }, {
		      name: '成交量2',
		      data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
		      format: function (val, name) {
		        return val.toFixed(2) + '万';
		      }
		    }],
		    xAxis: {
		      disableGrid: true
		    },
		    yAxis: {
		      title: '成交金额 (万元)',
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
		    categories: ['2012', '2013', '2014', '2015'],
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
		    canvasId: 'areaCanvas',
		    type: 'area',
		    categories: ['1', '2', '3', '4', '5', '6'],
		    animation: true,
		    series: [{
		      name: '成交量1',
		      data: [32, 45, 0, 56, 33, 34],
		      format: function (val) {
		        return val.toFixed(2) + '万';
		      }
		    }, {
		      name: '成交量2',
		      data: [15, 20, 45, 37, 4, 80],
		      format: function (val) {
		        return val.toFixed(2) + '万';
		      },
		    }],
		    yAxis: {
		      title: '成交金额 (万元)',
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
		    categories: ['1', '2', '3', '4', '5', '6'],
		    series: [{
		      name: '成交量1',
		      data: [90, 110, 125, 95, 87, 122]
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