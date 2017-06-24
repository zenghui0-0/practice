var App = getApp()
Page({
  data: {
    latitude: '',
    longitude: '',
    district: '',
    formatted_address: '',
    motto: 'Hello World',
    userInfo: {},
    tag:['新品','热卖','特价'],
    tagDisabled:[true,false,false],
  },
 
  onLoad(){
    this.getLocation()
  },
  getLocation() {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          latitude: res.latitude,
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
              formatted_address: res.data.result.formatted_address
            })
          }
        })
      }
    })
  }, 
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onTag: function(event){
    var disabledArr = [false,false,false];
    var id = event.target.id;
    if (id)
    {
      disabledArr[id] = true;
      console.log(event);
      this.setData({
        tagDisabled: disabledArr
        });
    }
  }
})
