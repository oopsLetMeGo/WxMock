const app = getApp()

Page({
  data: {
    name: '',
    current_time: ''
  },
  onLoad: function() {
    var _this = this;
    wx.request({
      url: 'https://test.org/wxmock/first_name',
      success: function(res) {
        console.log('name', res)
        _this.setData({
          name: res.data.name
        })
      }
    })

    wx.request({
      url: 'https://test.org/wxmock/now',
      success: function(res) {
        console.log('now', res)
        _this.setData({
          current_time: res.data.time
        })
      }
    })
  },
})