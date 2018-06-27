import Api from '../../utils/api.js';
var api = new Api();
Page({
  data: {

  },
  onLoad: function() {
    api.getWrap().then((res)=>{
      this.setData(res);
    });
  },
  bindToP(){
    api.bindTo("nav","/pages/pass/pass")
  }

})