// pages/user/user.js
const App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
      {
        icon: '/assets/images/icons/iconfont-order.png',
        text: '我的订单',
        path: '/pages/user/about/about'
      },
      {
        icon: '/assets/images/icons/iconfont-addr.png',
        text: '收货地址',
        path: '/pages/user/about/about'
      },
      {
        icon: '/assets/images/icons/iconfont-about.png',
        text: '关于我们',
        path: '/pages/user/about/about'
      },
    ],
    settings: [
      {
        icon: '/assets/images/icons/iconfont-kefu.png',
        text: '联系客服',
        path: '18521522201',
      },
    ]
  },
  onLoad() {
    this.getUserInfo()
    this.setStorageInfo()
  },
  navigateTo(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path

    wx.navigateTo({
      url: path,
    })
  },
  getUserInfo() {
    const userInfo = App.globalData.userInfo

    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
      return
    }

    App.getUserInfo()
      .then(data => {
        console.log(data)
        this.setData({
          userInfo: data
        })
      })
  }, 
  
  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    switch (index) {
      case 0:
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