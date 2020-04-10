//index.js
// pages/index/index.js
var arrse = require("../../utils/data.js")
// 用变量接收抛出来的路径里面的参数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    active: 0,
    indicatorDots: true, // 是否显示轮播的点
    vertical: true, // 方向是否为纵向
    autoplay: true, // 是否自动切换
    interval: 2000, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
  },
  // 链接
  change: function(){
    wx.navigateTo({
      url: '../bar/bar'
    })
  },
  // 数据切换(tab)
  think: function(e){ // 接收自定义属性(data-index)传来的参数
    this.setData({
      //设置active的值为用户点击按钮的索引值
     active:e.currentTarget.dataset.index,
     rider: arrse.getIndexNavSectionData()[e.currentTarget.dataset.index]
    })
    console.log(this.data.active) // 下标
    console.log(this.data.rider) // 根据下标显示的数组
  },
  // 滚动刷新
  lower: function(e){
    const _this = this
    console.log(_this.data.rider)
    this.setData({
      rider:_this.data.rider.concat(_this.data.rider1)
      // 让根据下标显示的数组和第一个数组拼接起来
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.data.arr
    for (let i = 1; i <= 4; i++) {
      array.push("../images/"+ i +".png")
    }
    this.setData({
      arr: array,
      riyle: arrse.getIndexNavData(),
      rider: arrse.getIndexNavSectionData()[this.data.active],
      rider1: arrse.getIndexNavSectionData()[0]
    })
    // console.log() //查看数据
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