import Api from '../../../utils/api.js';
import Act from '../../../utils/act.js';
var api = new Api();
var act = new Act();
var level = 3;
Page({
  data: {
    current: 0,
    gameState: 0,
    loadingMap: {
      "ifShow": false,
      "level": ""
    },
  },
  onLoad: function(options) {
    var self = this;
    api.getWrap().then((res) => {
      this.setData(res);
    });
    act.reset(level).then((res) => {
      this.setData(res);
    });
    this.setData({
      ['loadingMap.level']: level
    })
    setTimeout(() => {
      this.setData({
        ['loadingMap.ifShow']: false
      })
    }, 2000);
  },
  bindChange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  moveEvent(e) {
    var prop = e.currentTarget.dataset.prop;
    var event = "openDoor";
    var current = this.data.current;
    var scale = this.data.scale;
    var index = 0;
    var result = this.data.prop[prop].event[event].result;
    for (var key in this.data.prop) {
      if (this.data.prop[key].status == 1) {
        if (prop == key) {
          break;
        } else {
          index++;
        }
      }
    }
    act.moveEvent(e, level, prop, event, current, scale, index, result).then((res) => {
      if (res.wholeStatus == 0) {
        this.setData(res, () => {
          act.spriteChangeHifi(level, this.data.prop[prop].event[event].toWho).then((res) => {
            this.setData(res, () => {
              setTimeout(() => {
                this.setData({
                  ['prop.' + prop + '.status']: 3,
                })
              }, 300);
            });
          });
        });
      } else if (res.wholeStatus == 1) {
        this.setData(res, () => {
          setTimeout(() => {
            this.setData({
              ['prop.' + prop + '.status']: 3,
            })
          }, 300);
        });
      } else {
        this.setData(res)
      }
    });
  },
  moveOver(e) {
    var prop = e.currentTarget.dataset.prop;
    act.moveOver(prop, level).then((res) => {
      this.setData(res)
    });
  },

  reset() {
    act.reset(level).then((res) => {
      this.setData(res)
    });
  },


  spriteChange(e) {
    var sprite = e.currentTarget.dataset.sprite;
    var status = this.data.sprite[sprite].status;
    act.spriteChange(sprite, status).then((res) => {
      this.setData(res)
    });
  },

  //获取道具后的弹出提示 
  spriteChangeHifi(e) {
    var sprite = e.currentTarget.dataset.sprite;
    act.spriteChangeHifi(level, sprite).then((res) => {
      this.setData(res)
    });
  },

  //弹出提示的获取道具后
  spriteChangeGet(e) {
    console.log(e)
    var sprite = e.currentTarget.dataset.sprite;
    act.spriteChangeGet(level, sprite).then((res) => {
      this.setData(res)
    });
  },
  gameWin() {
    act.gameWin().then((res) => {
      this.setData(res)
    });
  },
  gameFail() {
    act.gameFail().then((res) => {
      this.setData(res)
    });
  },
  replay() {
    act.reset(level).then((res) => {
      this.setData(res);
    });
  },

  playOther() {
    api.bindTo("red", "/pages/pass/pass")
  },

  meneChange() {
    this.setData({
      menuShow: !this.data.menuShow
    })
  },

  // 柜子里的老板
  level3Event1() {
    act.spriteChange("cabinet", "0").then((res) => {
      this.setData(res);
      this.setData({
        layerState: true
      })
      setTimeout(() => {
        this.gameFail();
      }, 1300);
    });

  }

})