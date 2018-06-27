import Config from './config.js';

class Base {

  /**
   * 静态方法， 获取请求有的header
   */
  static getHeader() {
    return {
      'Content-Type': 'application/json',
      'TOKEN': wx.getStorageSync('token'),
      'APPID': Config.APP_ID,
      "INVITOR": wx.getStorageSync('inviterId') ? wx.getStorageSync('inviterId') : '',
      "FROM": wx.getStorageSync('from') ? wx.getStorageSync('from') : '',
      "POSITION": wx.getStorageSync('position') ? wx.getStorageSync('position') : '',
    };
  }

  /**
   * 发起请求
   */
  request(params, noLogin) {
    return new Promise((resolve, reject) => {
      let url = Config.API_HOST + params.url;
      wx.request({
        url: Config.API_HOST + params.url,
        data: params.data || {},
        method: params.method || 'GET',
        header: Base.getHeader(),
        success: (res) => {
          if (res.statusCode == 200) {
            let data = res.data;
            if (data.code == 302) {
              if (!noLogin) {
                this.login().then((res) => {

                  console.log('重新登录的请求的--->>', res);

                  if (res.data.isNew && params.url =='/api/v2/account/share/invite') {
                    params.data['isNew'] =true;
                    this.request(params, true).then(resolve).catch(reject);
                  } else {
                    this.request(params, true).then(resolve).catch(reject);
                  }
                
                });
              }
            } else {
              resolve(data);
            }
          } else {
            wx.showModal({
              title: '提示',
              content: "请求错误，请重试！！",
              showCancel: false,
              success: (res) => {
                this.request(params, noLogin).then(resolve).catch(reject);
              }
            });
          }
        },
        fail: (res) => {
          wx.showModal({
            title: '提示',
            content: "网络请求失败，请确保网络是否正常",
            showCancel: false,
            success: function (fail) {
              reject(res);
            }
          });
        }
      })
    })
  }

  /**
   * 发起get请求
   */
  get(url, data = {}) {
    return this.request({ url: url, data: data });
  }

  /**
   * 发起post请求
   */
  post(url, data = {}) {
    return this.request({ url: url, data: data, method: 'POST' });
  }

  /**
   * 登录
   */
  login() {
    let self = this;
    return new Promise((resolve, reject) => {
      wx.login({
        success: function (login) {
          self.request({
            url: '/api/v2/account/login',
            data: {
              code: login.code
            },
            method: 'POST'
          }).then((res) => {
            console.log('login -->>', res);
            wx.setStorageSync('token', res.data.token);
            wx.setStorageSync('uid', res.data.uid);
            resolve(res);
          }).catch(reject);

          // wx.getUserInfo({
          //   withCredentials: true,
          //   lang: "zh_CN",
          //   success: function (info) {
          //     getApp().globalData.userInfo = info.userInfo;

          //   },
          //   fail: function (fail) {
          //     // self.showAuthModal().then((res) => {
          //     //   console.log('login -- show', res);
          //     //   resolve(res);
          //     // }).catch(reject);
          //   }
          // });
        }
      })
    });
  }

  /**
   * 获取绑定的参数
   */
  getDataset(event) {
    return event.currentTarget.dataset;
  }

  /**
   * uploadUrl: 上传的url
   * filePath： 文件地址
   * formData: 上传数据
   */
  uploadFile(uploadUrl, filePath, formData = {}) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: Config.API_HOST + uploadUrl,
        filePath: filePath,
        name: 'file',
        formData: formData,
        header: {
          'Content-Type': 'multipart/form-data',
          'TOKEN': wx.getStorageSync('token'),
          'APPID': Config.APP_ID
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: (res) => {
          wx.showModal({
            title: '提示',
            content: "网络请求失败，请确保网络是否正常",
            showCancel: false,
            success: function (fail) {
              reject(res);
            }
          });
        }
      })
    })
  }


}

export default Base;