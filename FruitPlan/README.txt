assets/images/icons 放按钮图片
assets/images/goods 放货物图片（以后可以转到server上去）
assets/styles 放一些样式表供引入
utils 放一些配置脚本


这个图片放在good.icon 旁边
//wxml part
<image wx:if="{{show==ture}}" src="{{good.icon}}" class="show-iconImage" animation="{{animation}}" mode="scaleToFill"></image>
//wxss part
position:absolute
//js part
data:{
        animation:''
        }
animation = wx.createAnimation({
     duration: 300,
     timingFunction: 'linear'
    })
 animation.right('600rpx').step()
    this.setData({
    animationSourceCity: animation2.export()
   })//右移
   setTimeout(function(){
    animation2.left('30rpx').step({duration: 0, transformOrigin: "50%,50%",timingFunction: 'linear'})
    that.setData({
      animationSourceCity: animation2.export()
    })
   },285) //复位
