// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    phone: "138****4563",
    size: "北京直辖市朝阳区望京悠乐汇A座8011",
    index: 0,
    multiIndex: [0, 0, 0],
    date: '2007-09-01',
    time: '12:00',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
  },
  change: function(){
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    })
  },
  // 时间
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  // 日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
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