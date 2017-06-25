var App = getApp()
Page({
  data: {
    data: {
      goods: {
        1: {
          id: 1,
          name: '娃娃菜',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
          sold: 1014,
          price: 2
        },
        2: {
          id: 2,
          name: '金针菇',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/2.jpg',
          sold: 1029,
          price: 3
        },
        3: {
          id: 3,
          name: '方便面',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/2.jpg',
          sold: 1030,
          price: 2
        },
        4: {
          id: 4,
          name: '粉丝',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/2.jpg',
          sold: 1059,
          price: 1
        },
        5: {
          id: 5,
          name: '生菜',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/2.jpg',
          sold: 1029,
          price: 2
        },
        6: {
          id: 6,
          name: '白菜',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
          sold: 1064,
          price: 2
        },
        7: {
          id: 7,
          name: '杏鲍菇',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/2.jpg',
          sold: 814,
          price: 3
        },
        8: {
          id: 8,
          name: '香菇',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
          sold: 124,
          price: 3
        },
        9: {
          id: 9,
          name: '猴头菇',
          pic: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/goods/1.jpg',
          sold: 102,
          price: 5
        }
      },
      goodsList: [
        {
          id: 'hot',
          classifyName: '全部',
          goods: [1, 2, 3, 4, 5]
        },
        {
          id: 'new',
          classifyName: '水果',
          goods: [1, 3]
        },
        {
          id: 'vegetable',
          classifyName: '饮料',
          goods: [1, 6, 5]
        }
      ],
      cart: {
        count: 0,
        total: 0,
        list: {}
      },
      showCartDetail: false
    },
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
