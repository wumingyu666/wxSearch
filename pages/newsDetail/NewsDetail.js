//获取应用实例
const app = getApp();
Page({
	data: {
		isLoading: true,					// 判断是否尚在加载中
		article: {
    }						// 内容数据
  },
  
	onLoad: function (options) {
		let result = app.towxml(``,'markdown',{
			base:'https://www.baidu.com',				// 相对资源的base路径
			theme:'light',					// 主题，默认`light`
			events:{					// 为元素绑定的事件方法
				tap:(e)=>{
					console.log('tap',e);
				}
			}
		});

		// 更新解析数据
		this.setData({
			article:result,
			isLoading: false
    });
    // 获取 URL 参数并绑定到页面数据上
    this.setData({ content: options.content });
  },
  goToDiseasesPage: function(){
    wx.navigateTo({
      url: '/pages/diseases/diseases', // 目标页面路径
    })
  }
})
