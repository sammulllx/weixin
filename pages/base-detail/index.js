// var util = require('../../utils/util.js')
import * as echarts from '../../ec-canvas/echarts';

let chart = null;


function getLineOption1() {
  return {
	
    title: {
      text: '光照强度',
      left: 'center',
      tesxtStyle:{
        fontSize: 50,
      }

    },
	toolbox: {
	      feature: {
	        saveAsImage: {}
	      }
	    },
    color: ["#37A2DA"],
    legend: {
      data: ['光照强度均值(Lux)'],
      top: 50,
      left: 'center',
      // backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '光照强度均值(Lux)',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40,12,45,78,42,26,35]
    }]
  
  }

}
function getLineOption2() {
  return {
    title: {
      text: '中药溯源流程',
      x: 'center',
      y: '20',
      textStyle: {
        fontWeight: 'normal',
      }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    textStyle: {
      color: '#000'
    },
    series: [
      {
        type: 'graph',
        tooltip: {
          backgroundColor: 'skyblue',
          //                      formatter: "{b} <br/>{a} : {c} h "
        },
        layout: 'none',
        symbolSize: 10,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 12
            },
          }
        },
        data: [{
          name: '生产地',
          x: 100,
          y: 300,
          value:'恩平市中南沉香基地' ,
          //symbol:'rect', //让节点为矩形显示
          symbolSize: 40,//节点的长和宽
          itemStyle: {
            normal: {
              color: '#F0473C'
            }
          }
        }, {
          name: '运输',
          x: 200,
          y: 300,
          //symbol:'rect',
          symbolSize: 40,
          value: '东风快递',
          itemStyle: {
            normal: {
              color: '#0FF0FF'
            }
          }
        }, {
          name: '广工三饭一楼',
          x: 300,
          y: 300,
          value: 5,
          //symbol:'rect',
          symbolSize: [40, 40],
          itemStyle: {
            normal: {
              color: '#A79900'
            }
          }
        }
   
  
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1
          },
          {
            source: 1,
            target: 2
          },
          {
            source: 2,
            target: 3
          },
          {
            source: 3,
            target: 4
          },
          
        ],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0.2
          }
        }
      }
    ]
  }

  

}
function getLineOption3() {
  return {
    
    title: {
      text: '空气湿度',
      left: 'center'
    },
	toolbox: {
	      feature: {
	        saveAsImage: {}
	      }
	    },
    color: ["#37A2DA"],
    legend: {
      data: ['空气湿度均值'],
      top: 50,
      left: 'center',
      // backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '空气湿度均值',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 12, 45, 78, 42, 26, 35]
    }]

  }

}
function getLineOption4() {
  return {
    title: {
      text: '土壤温湿度均值',
      left: 'center'
    },
    tooltip: {
      show:true,
      trigger: 'axis'
      // axisPointer: {
      //   type: 'cross',
      //   label: {
      //     backgroundColor: '#6a7985'
      //   },
      // }
    },
    legend: {
      data: ['温度', '湿度'],
      top:50,
      left:'center',
      z:100
    },
    color: ["#0080ff", "#4cd5ce"],
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [

      {
        name: '温度',
        type: 'line',
        stack: '总量',
        itemStyle: {
          normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#d7f4f8' // 0% 处的颜色
            }, {
              offset: 0.5, color: '#eefcfd' // 100% 处的颜色
            }, {
              offset: 1, color: '#fff' // 100% 处的颜色
            }]
            ),  //背景渐变色 
            lineStyle: {        // 系列级个性化折线样式  
              width: 3,
              type: 'solid',
              color: "#4fd6d2"
            }
          },
          emphasis: {
            color: '#4fd6d2',
            lineStyle: {        // 系列级个性化折线样式  
              width: 2,
              type: 'dotted',
              color: "#4fd6d2" //折线的颜色
            }
          }
        },//线条样式  
        symbolSize: 5, //折线点的大小
        areaStyle: { normal: {} },
        data: [30, 33, 60, 13, 19, 43, 77]
      },
      {
        name: '湿度',
        type: 'line',
        stack: '总量',
        itemStyle: {
          normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#81befd' // 0% 处的颜色
            }, {
              offset: 0.4, color: '#e4f2ff' // 100% 处的颜色
            }, {
              offset: 1, color: '#fff' // 100% 处的颜色
            }]
            ), //背景渐变色    
            lineStyle: {        // 系列级个性化折线样式  
              width: 3,
              type: 'solid',
              color: "#0180ff" //折线的颜色
            }
          },
          emphasis: {
            color: '#0180ff',
            lineStyle: {        // 系列级个性化折线样式  
              width: 2,
              type: 'dotted',
              color: "0180ff"
            }
          }
        },//线条样式
        symbolSize: 5, //折线点的大小
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [82, 93, 90, 77, 66, 93, 76]
      }
    ]
   
  }

}
function getLineOption5() {
  return {
	  backgroundColor: "#ffffff",
	      color: ["#37A2DA", "#32C5E9", "#67E0E3"],
	      series: [{
	        name: '业务指标',
	        type: 'gauge',
	        detail: {
	          formatter: '{value}%'
	        },
	        axisLine: {
	          show: true,
	          lineStyle: {
	            width: 30,
	            shadowBlur: 0,
	            color: [
	              [0.3, '#67e0e3'],
	              [0.7, '#37a2da'],
	              [1, '#fd666d']
	            ]
	          }
	        },
	        data: [{
	          value: 40,
	          name: '实时温度',
	        }]
   
}],
 grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
}

}

Page({
	onShareAppMessage: function (res) {
	    return {
	      title: 'ECharts 可以在微信小程序中使用啦！',
	      path: '/pages/index/index',
	      success: function () { },
	      fail: function () { }
	    }
	  },
  data: {
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
	ecline1: {
	      onInit: function (canvas, width, height) {
	        const lineChart = echarts.init(canvas, null, {
	          width: width,
	          height: height
	        });
	        canvas.setChart(lineChart);
	        lineChart.setOption(getLineOption1());
	
	        return lineChart;
	      }
	    },
	      ecline2: {
	        onInit: function (canvas, width, height) {
	          const lineChart = echarts.init(canvas, null, {
	            width: width,
	            height: height
	          });
	          canvas.setChart(lineChart);
	          lineChart.setOption(getLineOption2());
	
	          return lineChart;
	        }
	      },
	        ecline3: {
	          onInit: function (canvas, width, height) {
	            const lineChart = echarts.init(canvas, null, {
	              width: width,
	              height: height
	            });
	            canvas.setChart(lineChart);
	            lineChart.setOption(getLineOption3());
	
	            return lineChart;
	          }
	        },
	          ecline4: {
	            onInit: function (canvas, width, height) {
	              const lineChart = echarts.init(canvas, null, {
	                width: width,
	                height: height
	              });
	              canvas.setChart(lineChart);
	              lineChart.setOption(getLineOption4());
	
	              return lineChart;
	            }
	          },
			  ecline5: {
			    onInit: function (canvas, width, height) {
			      const lineChart = echarts.init(canvas, null, {
			        width: width,
			        height: height
			      });
			      canvas.setChart(lineChart);
			      lineChart.setOption(getLineOption5());
			  	
			      return lineChart;
			    }
			  }
	  
  },
  call: function (e) {
    var phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone+""
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
  onUnload:function(){
	  wx.navigateTo({
	    url: '/pages/index/index',
	  })
	  console.log('跳转至detail')
  }

  
})