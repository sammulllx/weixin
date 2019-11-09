//index.js
//获取应用实例
var API_URL = 'http://api.zysuyuan.cn:8031/api/item/medicinalInf/list/viewdetail';
Page({
  data: {
	movies:[],
	title:"加载中",
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572956741156&di=e01e675170ee1c5d63850e4345d86c73&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130715%2FImg381668574.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571309802935&di=c45725f80464bfeee817c28bcac6432f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd1160924ab18972b764c061aedcd7b899f510aef.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572956815323&di=a5c6f9ec7c16f7621f7212f5b50a1fcd&imgtype=0&src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2018%2F01%2F0207%2F120733574_7_20180102075113704.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    topPicData: [
      {
        id:'',
        pic:'http://zhongyibaodian.com/all/bcgmpt/caobu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/chongbu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/renbu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/mubu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/shuibu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/gubu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/jiebu.gif'
      },
       {
        id:'',
         pic:'http://zhongyibaodian.com/all/bcgmpt/caibu.gif'
      }
    ],
    mainPicData: [
      {
        cname:'中药大全',
        cid: '1',
        cates: [
          {
            cid: '31',
            pic: 'http://www.zhongyoo.com/uploads/allimg/131112/1-131112102424A1-lp.jpg'
          },
           {
            cid: '31',
            pic: 'http://www.zhongyoo.com/uploads/allimg/131112/1-131112102424A1-lp.jpg'
          },
           {
            cid: '31',
            pic: 'http://www.zhongyoo.com/uploads/allimg/131112/1-131112102424A1-lp.jpg'
          },
           {
            cid: '31',
            pic: 'http://www.zhongyoo.com/uploads/allimg/131112/1-131112102424A1-lp.jpg'
          }
        ],
        goods: [
          {
           
            pic: 'http://www.zhongyoo.com/uploads/allimg/150707/1-150G011491Y91.jpg',
            title: '浮小麦',
            name:'清热药',
            view:'789'

           
          },
          {
            
            pic: 'http://www.zhongyoo.com/uploads/allimg/140611/1-14061110404L95.jpg',
            title: '伏龙肝',
            name: '止血药',
            view: '643'


          },
          {
            
            pic: 'http://www.zhongyoo.com/uploads/allimg/130806/1-130P6163F0O4.jpg',
            title: '苍耳子',
            name: '解表药',
            view: '935'


          },
          {
            
            pic: 'http://www.zhongyoo.com/uploads/allimg/1901/liulengju.jpg',
            title: '六棱菊',
            name: '祛风湿药',
            view: '474'


          },
          {
          
            pic: 'http://www.zhongyoo.com/uploads/allimg/140311/1-14031109500L21.jpg',
            title: '鸡爪大黄',
            name: '泻下药',
            view: '1034'


          },
          
          {
            
            pic: 'http://www.zhongyoo.com/uploads/allimg/160310/1-16061H10ZUa.jpg',
            title: '南瓜子',
			name:'利水渗湿药',
			view:347

          },
          {
           
            pic: 'http://www.zhongyoo.com/uploads/allimg/160623/1-160F3205245938.jpg',
            title:'百花丹',
			name:'活血化瘀药',
			view:'367'

          },
          {
         
            pic: 'http://www.zhongyoo.com/uploads/allimg/131118/1-13111Q51I3F2.jpg',
            title: '人参',
			name:'补虚药',
			view:'576'
          }
           
        ]
      },
        
    ]
  },
//搜索方法 key为用户输入的查询字段

//搜素时触发，调用search: function (key)，传入输入的e.detail.value值
wxSearchInput: function (e) {
 // this.search(e.detail.value);
 console.log("sss")
 console.log(e)
 console.log(e["detail"]["value"])
 console.log(e["detail"].value);
},
wxSearchFn:function(e){
	console.log("aaa")
	console.log(e)
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
         console.log(res.data[0]);
  			wx.hideToast();
  			var data = res.data;
  			that.setData({			
  				movies:data
  			});
  		}
  	});
  }
})