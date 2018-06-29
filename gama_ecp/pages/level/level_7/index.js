import Api from '../../../utils/api.js';
import Act from '../../../utils/act.js';
var api = new Api();
var act = new Act();
var level = 7;
Page({
  data: {
    current: 0,
    gameState: 0,
    loadingMap: {
      "ifShow": true,
      "level": ""
    },
    level7Event: 0,
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
    var current = this.data.current;
    var scale = this.data.scale;
    var pageX = e.touches[0].pageX * scale;
    var pageY = e.touches[0].pageY * scale;
    var event = "";
    var result = "";
    for (var findEvent in this.data.prop[prop].event) {
      if (pageX > this.data.prop[prop].event[findEvent].leftX && pageX < this.data.prop[prop].event[findEvent].rightX && pageY > this.data.prop[prop].event[findEvent].topY && pageY < this.data.prop[prop].event[findEvent].bottomY && current == this.data.prop[prop].event[findEvent].current) {
        event = findEvent;
      }
    }
    var index = 0;
    if (event == "") {
      result = -1;
    } else {
      result = this.data.prop[prop].event[event].result;
    }
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
        // 第五关特别事件 鱼竿动作
        if (this.data.sprite.bossBack.status == 1) {
          this.setData({
            ['sprite.movePole.status']: 1,
            layerState: true
          })
          setTimeout(() => {
            this.setData({
              ['sprite.movePole.status']: 0,
              layerState: false
            })
            this.setData(res, () => {
              act.spriteChangeHifi(level, this.data.prop[prop].event[event].toWho).then((res) => {
                this.setData(res, () => {
                  setTimeout(() => {
                    this.setData({
                      ['prop.' + prop + '.status']: 3,
                      ['prop.key.status']: 0,
                    })
                  }, 300);
                });
              });
            });
          }, 1500);
        } else {
          this.setData({
            ['prop.pole.x']: res['prop.pole.curX'],
            ['prop.pole.y']: res['prop.pole.curY']
          })
        }
      } else if (res.wholeStatus == 1) {

        // 第五关特别事件 挂蒙娜丽莎
        if (event = "changePaint") {
          this.setData({
            ['prop.' + prop + '.event.' + event.toWho]: 1,
            ['sprite.bossFront.status']: 1,
            ['sprite.bossBack.status']: 1,
            ['sprite.key.status']: 2,
          })
        }
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
    var sprite = e.currentTarget.dataset.sprite;
    act.spriteChangeGet(level, sprite).then((res) => {
      this.setData(res)
      if (sprite == "revolver") {
        this.setData({
          layerState: true
        })
        setTimeout(() => {
          this.gameFail(4);
        }, 500)
      }
    });
  },
  gameWin(e) {
    var index = e;
    if (e.currentTarget && e.currentTarget.dataset.index) {
      index = e.currentTarget.dataset.index;
    }
    act.gameWin(index).then((res) => {
      this.setData(res)
    });
  },
  gameFail(e) {
    var index = e;
    if (e.currentTarget && e.currentTarget.dataset.index) {
      index = e.currentTarget.dataset.index;
    }
    act.gameFail(index).then((res) => {
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


  // 开老板箱子动作
  level7Event1() {
    act.spriteChange("sportsCabinetLeft", 0).then((res) => {
      this.setData(res);
      this.setData({
        layerState: true
      })
    });
    setTimeout(() => {
      this.gameFail(1);
    }, 1000)
  },
  // 点照片
  level7Event2() {
    this.setData({
      ['sprite.sportsCabinetRight.status']: 2
    });
  }
})