// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:true,
  },
  // 获取用户信息
  onUserinfo(e){
    let userInfo = e.detail.userInfo;
    if(userInfo){
      this.setData({login:false,userInfo})
    }
  },
  // 信息设置
  onSet(e){
    console.log("安全设置")
  },
  // 安全退出
  onQit(e){
    console.log('退出')
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