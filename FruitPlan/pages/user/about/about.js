var App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var userInfo = getApp().globalData.userInfo;
    console.log(userInfo)
    this.getLocation()
  },
getLocation(){
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          latitude : res.latitude,
          longitude: res.longitude
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
              formatted_address : res.data.result.formatted_address
            })
          }
        })
    }
  })
  }, 
  getPlaceName(){
      var that = this
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              address_component: res.address_component
            }
          })
  }, 
  goPay(){
    wx.requestPayment({
      'timeStamp': '20170620',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log(OK)
      },
      'fail': function (res) {
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})