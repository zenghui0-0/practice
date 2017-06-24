// pages/user/user.js
var App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
      {
        icon: '/assets/images/icons/iconfont-order.png',
        text: '我的订单',
        path: '/pages/order/order'
      },
      {
        icon: '/assets/images/icons/iconfont-about.png',
        text: '关于我们',
        path: '/pages/user/about/about'
      },
    ],
    settings: [
      {
        icon: '/assets/images/icons/iconfont-addr.png',
        text: '收货地址',
        path: ''
      },
      {
        icon: '/assets/images/icons/iconfont-kefu.png',
        text: '联系客服',
        path: '18521522201',
      },
    ]
  },
  onLoad() {
    this.getUserInfo()
  },
  onShow() {

  },
  navigateTo(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
        wx.navigateTo({url: path,})

    },
 getUserInfo() {
    var that = this ;
    const userInfo = App.globalData.userInfo
    if (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    }
    else {
      wx.getUserInfo({
        success: function (res){
          that.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  }, 

  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    switch (index) {
      case 0:
          wx.chooseAddress({
            success: function (res) {
              console.log(res.userName)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
          break
      case 1:
        wx.makePhoneCall({
          phoneNumber: path,
          success : function() { 
            console.log('成功拨打电话')
          }
        })
        break
    }
  },
})