import Api from '../../utils/api.js';
var api = new Api();
Page({
  data: {
    test: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  onLoad: function() {
    api.getWrap().then((res) => {
      this.setData(res);
    });
  },
  bindToI() {
    api.bindTo("red", "/pages/index/index")
  },

  // 开始闯关
  pass(e) {
    var index = e.currentTarget.dataset.index;
    var url = "/pages/level/level_" + index + "/index"
    if(index>3){
      api.bindTo("nav", '/pages/level/cur/index')
    }else{
      api.bindTo("nav", url)
    }
  }

})