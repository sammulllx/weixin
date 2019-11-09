//logs.js

var util = require('../../utils/util.js')


let chart = null;


function getLineOption1() {
  return {
    title: {
      text: '1光照强度',
      left: 'center'
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
      text: '1光照强度',
      left: 'center'
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
      name: '光照强度均值(Lux)',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 12, 45, 78, 42, 26, 35]
    }]

  }

}
function getLineOption4() {
  return {
    title: {
      text: '测试下面legend的红色区域不应被裁剪',
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
      data: ['邮件营销', '搜索引擎'],
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
        name: '邮件营销',
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
        data: [320, 332, 601, 134, 120, 230, 210]
      },
      {
        name: '搜索引擎',
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
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
   
  }

}

Page({
  data: {
	  goods: [
	    {
	     
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571904916&di=3066a6f14163dd9287c7f96deef1b683&imgtype=jpg&er=1&src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3211113039-3E2599348A79DBAA69EEC26AA9678898%2F0%3Ffmt%3Djpg%26amp%3Bsize%3D292%26amp%3Brs%3D219-204%26amp%3Bh%3D468%26amp%3Bw%3D700%26amp%3Bppv%3D1',
	      title: '种植物：浮小麦',
	      name:'负责人：王伟吉',
	      firm:'清远种植基地'
	  
	     
	    },
	    {
	      
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571904937&di=1a166ae064b9bb685e2a5c653442a21f&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120912%2FImg352893037.jpg',
	      title: '种植物：伏龙肝',
	      name: '负责人：谭林勇',
	      firm: '中山种植基地'
	  
	  
	    },
	    {
	      
	      pic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=399738955,855148523&fm=26&gp=0.jpg',
	      title: '种植物：苍耳子',
	      name: '负责人：黄雯雯',
	      firm: '揭阳种植基地'
	  
	  
	    },
	    {
	      
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571310250833&di=684a5da25312039244118cdfbe141c24&imgtype=0&src=http%3A%2F%2Fwww.agri.cn%2Fprovince%2Fheilongjiang%2Fnyyw%2F201609%2FW020160907568483704616.jpg',
	      title: '种植物：六棱菊',
	      name: '负责人：钟浩奇',
	      firm: '云浮种植基地'
	  
	  
	    },
	    {
	    
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571905001&di=26cf3ba50fbdca89119719e7b17a48b0&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FD%2FD7%2FD7C74485DD31510C0C233A13FA88BC8E.jpg',
	      title: '种植物：冬虫夏草',
	      name: '负责人：邝文文',
	      firm: '清远种植基地'
	  
	  
	    },
	    
	    {
	      
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571310352095&di=d81eaba0b70477a44c8ab85ac5ce26e3&imgtype=0&src=http%3A%2F%2Fwww.gxny.gov.cn%2Fxwdt%2Fgxlb%2Fyl%2F201903%2FW020190315628292320860.jpg',
	      title: '种植物：天花粉',
	  	name:'负责人：李富贵',
	  	firm:'陆川种植基地'
	  
	    },
	    {
	     
	      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571310352093&di=6d8739b01b494b968285022a26efe279&imgtype=0&src=http%3A%2F%2Fxthjj01.xm15.host.35.com%2FupLoad%2Fproduct%2Fmonth_1408%2F201408211847115947.jpg',
	      title:'种植物：柴胡',
	  	  name:'负责人：王达发',
	  	  firm:'汕尾种植基地'
	  
	    },
	    {
	   
	      pic: 'http://img0.imgtn.bdimg.com/it/u=3858333608,1176415202&fm=15&gp=0.jpg',
	      title: '种植物：人参',
	  	  name:'负责人：李华',
	  	  firm:'梅州种植基地'
	    }],
	  
    logs: [],
    inputShowed: false,
    inputVal: "",
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    baseurl:'../../image/base.jpg',
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
          }
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  gotobase: function () {
    let plugin = requirePlugin('routePlan');
    let key = 'YWTBZ-NZW6P-6PWDI-L562P-YLCJO-3OFXH';  //使用在腾讯位置服务申请的key
    let referer = 'sammul';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
      'name': '茂名化橘红基地',
      'latitude': 21.67,
      'longitude': 110.63
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });

  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    console.log(this.data)
  },
 
  todetail: function () {
    wx.navigateTo({
      url: '/pages/blank/blank',
    })
    console.log('跳转至detail')
  }
  })

