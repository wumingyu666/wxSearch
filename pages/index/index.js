//index.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    // wxSearchData:{
    //   view:{
    //     isShow: true
    //   }
    // }
    list: [{"name":1,"content":1},{"name":2,"content":2}]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that,43,['weappdev','小程序','wxParse','wxSearch','wxNotification']);
    WxSearch.initMindKeys(['weappdev.com','微信小程序开发','微信开发','微信小程序']);
    // 调用后端接口获取数据
    // wx.request({
    //   url: 'https://www.portgas.icu/v1/com/news/list',
    //   success: res => {
    //     // 将接口返回的数据绑定到页面数据上
    //     this.setData({ list: res.data.list });
    //   }
    // })
  },
  gotoNewsDetail: function (event) {
    // 获取元素自定义属性中的数据
    var content = event.currentTarget.dataset.content;
    // 跳转到目标页面并将数据作为 URL 参数传递
    wx.navigateTo({
      url: '/pages/newsDetail/NewsDetail?content=' + encodeURIComponent(content)
    });
  },
  wxSearchFn: function(e){
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    
  },
  wxSearchInput: function(e){
    var that = this
    WxSearch.wxSearchInput(e,that);
  },
  wxSerchFocus: function(e){
    var that = this
    WxSearch.wxSearchFocus(e,that);
  },
  wxSearchBlur: function(e){
    var that = this
    WxSearch.wxSearchBlur(e,that);
  },
  wxSearchKeyTap:function(e){
    var that = this
    WxSearch.wxSearchKeyTap(e,that);
  },
  wxSearchDeleteKey: function(e){
    var that = this
    WxSearch.wxSearchDeleteKey(e,that);
  },
  wxSearchDeleteAll: function(e){
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function(e){
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})
