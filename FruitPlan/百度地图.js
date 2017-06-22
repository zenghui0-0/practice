Page({ 
 data:{ 
 city:''
 }, 
 onLoad:function(options){ 
 this.loadInfo(); 
 }, 
 loadInfo:function(){ 
 var page=this
 wx.getLocation({ 
 type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 
 success: function(res){ 
 // success 
 var longitude=res.longitude 
 var latitude=res.latitude 
 page.loadCity(longitude,latitude) 
 }, 
 fail: function() { 
 // fail 
 }, 
 complete: function() { 
 // complete 
 } 
 }) 
 }, 
 loadCity:function(longitude,latitude){ 
 var that = this
 wx.request({ 
 url: 'https://api.map.baidu.com/geocoder/v2/?ak=您的ak &location='+latitude+','+longitude+'&output=json', 
 data: {}, 
 header:{ 
 'Content-Type':'application/json'
 }, 
 success: function(res){ 
 // success 
 console.log(res); 
 var city=res.data.result.addressComponent.city; 
 that.setData({city:city}); 
 }, 
 fail: function() { 
 // fail 
 }, 
 complete: function() { 
 // complete 
 } 
 }) 
 } 
}) 
