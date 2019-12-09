// pages/home/home.js
let app = getApp();console.log('app:',app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'laoxie',
    category: ['html', 'css', 'javascript', 'jQuery', 'Vue', 'React', 'Node', 'html', 'css', 'javascript', 'jQuery', 'Vue', 'React', 'Node']
  },

  addItem(){
    // console.log(1234)
    // 修改数据
    let category = this.data.category;
    category.push('MongoDB');
    this.setData({
      category
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
    console.log('下拉刷新')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(666)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (obj) {
    console.log('share',obj);

    // 自定义分享内容
    return {
      title:'老谢的分享',
      path:'/pages/index/index',//用户点击分享连接进入的页面
      imageUrl:'/img/g3.jpg' //分享时显示的图片
    }
  }
})