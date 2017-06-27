var App = getApp()
Page({
  data: {
    // 页面配置  
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    //商品
    goods: [
       {
        "name":"普通西瓜",
        "description": "不红不要钱",
        "price": 10,
        "amount": "500g",
        "icon":"/assets/images/water_melon.png",
      },
       {
        "name":"冰西瓜",
        "description": "不红不要钱",
        "price":"20",
        "amount": "500g",
        "icon":"/assets/images/ice_water_melon.png",
       }, {
         "name": "普通西瓜",
         "description": "不红不要钱",
         "price": 10,
         "amount": "500g",
         "icon": "/assets/images/water_melon.png",
       },
       {
         "name": "冰西瓜",
         "description": "不红不要钱",
         "price": "20",
         "amount": "500g",
         "icon": "/assets/images/ice_water_melon.png",
       }, {
         "name": "普通西瓜",
         "description": "不红不要钱",
         "price": 10,
         "amount": "500g",
         "icon": "/assets/images/water_melon.png",
       },
    ]
  },
 
  onLoad(){
    var that = this;
    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
