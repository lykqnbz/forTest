// Api请求
import Base from './base.js';
import Config from './config.js';

class Api extends Base {
  // 获取手机信息
  getWrap() {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: function(res) {
          var wrap = {
            wrapHeight: res.windowHeight,
            wrapWidth: res.windowWidth,
            phoneModel: res.model,
            scale: 750 / res.windowWidth
          }
          resolve(wrap);
        }
      })
    });
  }

  // Toast提示
  showToast(title) {
    wx.showToast({
      icon: 'none',
      title: title,
    })
  }

  // 跳转
  bindTo(type, url) {
    switch (type) {
      case "nav":
        wx.navigateTo({
          url: url
        });
        break;
      case "red":
        wx.redirectTo({
          url: url
        });
        break;
      case "rel":
        wx.reLaunch({
          url: url
        });
        break;
    }
  }


}

export default Api;