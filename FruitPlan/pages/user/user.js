// pages/user/user.js
const App = getApp()

Page({
  data: {
    userInfo: {},
    items: [
      {
        icon: '/assets/images/icons/iconfont-order.png',
        text: '我的订单',
        path: '/pages/cart/cart'
      },
      {
        icon: '/assets/images/icons/iconfont-addr.png',
        text: '收货地址',
        path: '/pages/address/list/index'
      },
      {
        icon: '/assets/images/icons/iconfont-about.png',
        text: '关于我们',
        path: '/pages/about/index'
      },
    ],
    settings: [
      {
        icon: '/assets/images/icons/iconfont-clear.png',
        text: '清除缓存',
        path: '0.0KB'
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
    this.getStorageInfo()
  },
  navigateTo(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path

    switch (index) {
      case 2:
        App.WxService.makePhoneCall({
          phoneNumber: path
        })
        break
      default:
        App.WxService.navigateTo(path)
    }
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
  getStorageInfo() {
    App.WxService.getStorageInfo()
      .then(data => {
        console.log(data)
        this.setData({
          'settings[0].path': `${data.currentSize}KB`
        })
      })
  },
  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    switch (index) {
      case 0:
        wx.showModal({
          title: '友情提示',
          content: '确定要清除缓存吗？',
          success: function (res) {
            if (res.confirm) {
              console.log(index)
              console.log('用户点击确定')
            }
          }
        })
        break
      case 1:
        wx.makePhoneCall({
          phoneNumber: path,
          success : function() { 
            console.log(index)
            console.log('成功拨打电话')}
        })
        break
    }
  },
  logout() {
    wx.showModal({
      title: '友情提示',
      content: '确定要登出吗？T_T',
      success: function(res){
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
  })
  },
  signOut() {
    App.HttpService.signOut()
      .then(data => {
        console.log(data)
        if (data.meta.code == 0) {
          App.WxService.removeStorageSync('token')
          App.WxService.redirectTo('/pages/index/index')
        }
      })
  },
})