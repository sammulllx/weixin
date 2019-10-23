// var API_URL = "https://douban.uieee.com/v2/movie/subject/";

Page({
	data:{
    movie: {
      name:'使君子',
      oname:'舀求子、四君子、史君子',
      sname:'Quisqualis indica L.',
      where:'清远一号园区',
      summary: '使君子（学名：Quisqualis indica L.）是使君子科使君子属植物。攀援灌木，叶对生，椭圆形，两面均被灰白色柔毛。穗状花序，倒挂下垂。花期夏秋。果有五棱，熟时黑色，种子白色'}
	},
	onLoad:function (params){
		 console.log(params);
		var that = this;
		wx.request({
		  url: API_URL+params.id, 
		  data: {},
		  header: {
        'Content-Type': 'application/xml'
		  },
		  success: function(res) {
		  //  console.log(res.data)
		    that.setData({
		    	movie: res.data
		    });
		  }
		})
	}
});