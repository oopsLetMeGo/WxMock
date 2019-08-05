var __request = wx.request;
var Mock = require("./mock.js");
Object.defineProperty(wx, "request", {
  writable: true
});

function find(options) {

  for (var sUrlType in Mock._mocked) {
    var item = Mock._mocked[sUrlType]
    if (
      (!item.rurl || match(item.rurl, options.url)) &&
      (!item.rtype || match(item.rtype, options.type.toLowerCase()))
    ) {
      // console.log('[mock]', options.url, '>', item.rurl)
      return item
    }
  }

  function match(expected, actual) {
    if (expected.constructor.name.toLowerCase() === 'string') {
      return expected === actual
    }
    if (expected.constructor.name.toLowerCase() === 'regexp') {
      return expected.test(actual)
    }
  }

}
wx.request = function(config) {
  var options = {
    url: config.url,
    type: config.method
  }

  var item = find(options)
  if (item) {
    var response = Mock.mock(item.template);
    if (typeof config.success == "function") {
      config.success(response)
    }
    if (typeof config.complete == "function") {
      config.complete(response)
    }
  } else {
    __request(config);
  }
};
module.exports = Mock;