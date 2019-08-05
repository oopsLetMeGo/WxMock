var Mock = require('./WxMock.js')

Mock.mock('https://test.org/wxmock/first_name', {
  data: {
    name: Mock.Random.first()
  }
})

Mock.mock(/\/wxmock\/now/, {
  data: {
    time: Mock.Random.now()
  }
})