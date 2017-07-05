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
      //tab0的商品
      {
        "tabName" : "当季热销",
        "list" : [
          {
            "name":"冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price":"20",
            "icon":"/assets/images/ice_water_melon.png",
            "Count": 0,
          }, 
          {
            "name": "无籽大西瓜约10斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          },
        ],
      },
      //tab1的商品
      {
        "tabName": "优选鲜果",
        "list": [
          {
            "name": "普通小西瓜约5斤",
            "tag": "红",
            "store": "0",
            "price": "10",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          },
          {
            "name": "冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/ice_water_melon.png",
            "Count": 0,
          },
          {
            "name": "无籽大西瓜约10斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          },
          {
            "name": "冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/ice_water_melon.png",
            "Count": 0,
          }, {
            "name": "普通小西瓜约5斤",
            "tag": "红",
            "store": "999",
            "price": "10",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          }
        ],
      },
      //tab2的商品
      {
        "tabName": "果汁饮料",
        "list": [
          {
            "name": "普通小西瓜约5斤",
            "tag": "红",
            "store": "999",
            "price": "10",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          },
          {
            "name": "冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/ice_water_melon.png",
            "Count": 0,
          },
        ],
      },
      //tab3的商品
      {
        "tabName": "休闲零食",
        "list": [
          {
            "name": "冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/ice_water_melon.png",
            "Count": 0,
          },
          {
            "name": "无籽大西瓜约10斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/water_melon.png",
            "Count": 0,
          },
          {
            "name": "冰西瓜半个约5斤",
            "tag": "红",
            "store": "999",
            "price": "20",
            "icon": "/assets/images/ice_water_melon.png",
            "Count": 0,
          },
        ],
      },
    ],
  },
 
  onLoad(){
   
  },
  
  // 滑动切换tab 
  bindChange: function (e) {
    console.log(e);
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
  addCart(e){
    console.log(e.detail);
    var that = this;
    var index = e.currentTarget.dataset.index;
    this.data.goods[this.data.currentTab].list[index].Count++;
    that.setData({
      goods : this.data.goods
    })
  },
  decreaseCart(e){
    console.log(e.detail);
    var that = this;
    var index = e.currentTarget.dataset.index;
    this.data.goods[this.data.currentTab].list[index].Count--;
    that.setData({
      goods: this.data.goods
    })
  }
})
