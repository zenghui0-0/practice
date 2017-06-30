// pages/user/user.js
var App = getApp()

Page({
  data: {
    userInfo: {},
    location: {
      latitude : '',
      longitude: '',
    },
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
        path: '185****201',
      },
      {
        icon: '/assets/images/icons/setting.png',
        text: '个人设置',
        path: '',
      },
    ]
  },
  onLoad() {
    this.getLocation()
  },
  onShow() {
    this.getUserInfo()
  },
  navigateTo(e) {
    const index = e.currentTarget.dataset.index;
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({url: path,})
    },
 getUserInfo() {
    var that = this ;
    var userInfo = this.data.userInfo;
    if (this.data.userInfo) {
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  }, 
 getLocation() {
   var that = this
   wx.getLocation({
     type: 'wgs84',
     success: function (res) {
       var latitude = res.latitude;
       var longitude = res.longitude;
       that.setData({
         latitude: res.latitude,
         longitude: res.longitude,
       })
       wx.request({
         //url: 'https://api.map.baidu.com/geocoder/v2/?ak=cVHe9GgtnsFBSSANCcG8QIEv5GCY1rbQ&location=' + latitude + ',' + longitude + '&output=json',
         url: 'https://api.map.baidu.com/geocoder/v2/?ak=cVHe9GgtnsFBSSANCcG8QIEv5GCY1rbQ&location=26.475351,116.015424&output=json',
         data: {
         },
         header: {
           'Content-Type': 'application/json'
         },
         success: function (res) {
           that.setData({
             district: res.data.result.addressComponent.district,
             formatted_address: res.data.result.formatted_address
           })
         }
       })
     }
   })
 }, 
  bindtap(e) {
    const index = e.currentTarget.dataset.index;
    const path = e.currentTarget.dataset.path;
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
          break;
      case 1:
        wx.makePhoneCall({
          phoneNumber: 121,
          success : function() { 
            console.log('成功拨打电话')
          }
        })
        break;
      case 2:
        wx.openSetting({
          success: (res) => {
            console.log(res)
            /*
             * res.authSetting = {
             *   "scope.userInfo": true,
             *   "scope.userLocation": true
             * }
             */
          }

        })
        break;
    }
  },
})
