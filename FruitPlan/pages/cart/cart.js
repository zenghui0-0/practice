// pages/cart/cart.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData:[
      {
        fruitId:1,
        fruitName:"香蕉",
        count:3,//加入的数量
        price:350,//单价
      },
      {
        fruitId: 2,
        fruitName: "苹果",
        count: 2,//加入的数量
        price: 520,//单价
      },
      {
        fruitId: 3,
        fruitName: "蜜桃",
        count: 2,//加入的数量
        price: 862,//单价
      },
    ],
    sumPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.calSum();
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
  
  },

  onAddCount:function(e) {
    var cartData = this.data.cartData;
    const fruitId = e.currentTarget.dataset.fruitid;
    for(var i = 0;i<cartData.length;i++)
    {
      if (fruitId == cartData[i].fruitId)
      {
        cartData[i].count++;
        this.setData({
          cartData:cartData,
        });
        this.calSum();
      }
    }
    
  },

  onSubCount:function(e) {
    var cartData = this.data.cartData;
    var fruitId = e.currentTarget.dataset.fruitid;
    for (var i = 0; i < cartData.length; i++) {
      if (fruitId == cartData[i].fruitId) {
        if (cartData[i].count == 1) {
          var that = this;
          var name = cartData[i].fruitName;
          var index = i;
          wx.showModal({
            title: '从购物车中移除',
            content: '确定将' + name + '从购物车中移除？',
            success:function(res)
            {
              if(res.confirm){
                cartData.splice(index,1);
                that.setData({
                  cartData:cartData,
                });
                that.calSum();
              }
            }
          });
          return;
        }
        cartData[i].count--;
        this.setData({
          cartData: cartData,
        });
        this.calSum();
      }
    }
  },

  calSum:function()
  {
    var sumPrice = 0;
    for(var i = 0; i < this.data.cartData.length; i++)
    {
      var item = this.data.cartData[i];
      sumPrice += item.price * item.count;
    }
    this.setData({
      sumPrice: sumPrice,
    });
  },

  //下单
  onSubmit:function()
  {

  },
  onClear:function()
  {
    this.setData({
      cartData:[],
      sumPrice: 0,
    });
  },
  goToHome:function()
  {
    wx.switchTab({
      url: '../../pages/home/home',
    });
  }

})