// pages/reject/reject.js
var arrse = require("../../utils/data.js")
// 拿个变量接收外部抛出来的数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    na: "山炮",
    me: "张三",
    ph: "13833337998",
    one: "138****4563",
    si: "北京直辖市朝阳区望京悠乐汇A座8011",
    ze: "北京直辖市朝阳区望京悠乐汇A座4020",
    asd: "../images/avatar.png"
    // ong: arrse.userData()?
  },
  change:function(){
    wx.navigateTo({
      url: '../adds/adds'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // ong: arrse.userData().avatar
    })
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