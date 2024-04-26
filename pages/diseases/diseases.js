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

    diseases: {
      diseasesList:[
      {
          id: 1,
          title: '新冠疫苗开始全球分发',
          cover: 'https://example.com/news1.jpg',
          content: '...',
          images:["../../images/保护伞.png"],
          tag:111,
          date:"2024-04-22",
          commont:"111",
          parise:"111"
      },
      {
          id: 2,
          title: '美国总统大选落幕',
          cover: 'https://example.com/news2.jpg',
          content: '...',
          images:["../../images/保护伞.png"],
          tag:111,
          date:"2024-04-22",
          commont:"111",
          parise:"111"
      },
      {
          id: 3,
          title: '中国成功发射嫦娥五号探月任务',
          cover: 'https://example.com/news3.jpg',
          content: '...',
          images:["../../images/保护伞.png"],
          tag:111,
          date:"2024-04-22",
          commont:"111",
          parise:"111"
      }
  ]}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that,43,['weappdev','小程序','wxParse','wxSearch','wxNotification']);
    WxSearch.initMindKeys(['weappdev.com','微信小程序开发','微信开发','微信小程序']);
  },

  goToDiseasesDetail: function(){
    wx.navigateTo({
      url: '/pages/diseasesDetail/diseasesDetail', // 目标页面路径
    })
  }
})
