//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    tag:['新品','热卖','特价'],
    tagDisabled:[true,false,false],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
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
