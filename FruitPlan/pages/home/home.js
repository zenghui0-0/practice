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
        "store": "0",
        "price": "10",
        "amount": "500g",
        "icon":"/assets/images/water_melon.png",
        "selected": false,
      },
       {
        "name":"冰西瓜",
        "description": "不红不要钱",
        "store": "999",
        "price":"20",
        "amount": "500g",
        "icon":"/assets/images/ice_water_melon.png",
        "selected": true,
       }, {
         "name": "普通西瓜",
         "description": "不红不要钱",
         "store": "999",
         "price": "10",
         "amount": "500g",
         "icon": "/assets/images/water_melon.png",
         "selected": true,
       },
       {
         "name": "冰西瓜",
         "description": "不红不要钱",
         "store": "999",
         "price": "20",
         "amount": "500g",
         "icon": "/assets/images/ice_water_melon.png",
         "selected": false,
       }, {
         "name": "普通西瓜",
         "description": "不红不要钱",
         "store": "999",
         "price": "10",
         "amount": "500g",
         "icon": "/assets/images/water_melon.png",
         "selected": true,
       },
    ]
  },
 
  onLoad(){
   
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
  },
  changeState(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    var state = this.data.goods[index].selected;
    if (state){
      this.data.goods[index].selected = false;
      that.setData({
          goods: this.data.goods
        })
    }
    else{
      this.data.goods[index].selected = true;
      that.setData({
        goods: this.data.goods
      })
    }
  }
})
