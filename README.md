# WxMock
微信小程序 数据模拟   
基于以下项目修改而来,支持正则匹配url
- [mockjs](http://mockjs.com "mockjs")
- [WxMock](https://github.com/webx32/WxMock "WxMock")
### 代码段分享
[https://developers.weixin.qq.com/s/gaHfApms7Uau](https://developers.weixin.qq.com/s/gaHfApms7Uau)
## 使用
1. 项目下新建mock文件夹并拷贝以下文件
   - mock/mock.js
   - mock/WxMock.js
2. 新建mock/mock-api.js 并引入WxMock
```javascript
var Mock = require('./WxMock.js')
```
3. 在mock-api.js中编辑模拟接口
```javascript
//全url匹配
Mock.mock('https://test.org/wxmock/first_name', {
  data: {
    name: Mock.Random.first()
  }
})

//正则匹配
Mock.mock(/\/wxmock\/now/, {
  data: {
    time: Mock.Random.now()
  }
})
```
>Mock.js 使用方法: http://mockjs.com/examples.html
4. 在app.js中引入模拟接口配置
```javascript
require('./mock/mock-api.js')
```
5. 调用测试
```javascript
 wx.request({
  url: 'https://test.org/wxmock/first_name',
  success: function(res) {
    console.log('name', res)
  }
})

wx.request({
  url: 'https://test.org/wxmock/now',
  success: function(res) {
    console.log('now', res)
  }
})
```
