import Api from '../../../utils/api.js';
import Act from '../../../utils/act.js';
var api = new Api();
var act = new Act();
var level = 4;
Page({
  data: {
    current: 0,
    gameState: 0,
    loadingMap: {
      "ifShow": true,
      "level": ""
    },
    level4Event: 0,
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

        // 第四关特别事件 喂食动作
        if (event == "giveWorkerG") {
          this.setData({
            ['sprite.workerGrey.status']: 2,
            layerState: true
          })
        } else if (event == "giveWorkerY") {
          this.setData({
            ['sprite.workerYellow.status']: 2,
            layerState: true
          })
        } else {
          this.setData({
            ['sprite.boss.status']: 2,
            layerState: true
          })
        }
        setTimeout(() => {
          if (event == "giveWorkerG") {
            this.setData({
              ['sprite.workerGrey.status']: 1,
              layerState: false
            })
          } else if (event == "giveWorkerY") {
            this.setData({
              ['sprite.workerYellow.status']: 1,
              layerState: false
            })
          } else {
            this.setData({
              ['sprite.boss.status']: 1,
            })
            if (this.data.sprite.workerYellow.status == 1 && this.data.sprite.workerGrey.status == 1) {
              this.setData({
                ['sprite.door.status']: 1,
                layerState: false
              })
            } else {
              setTimeout(() => {
                this.gameFail(1);
              }, 1000)
            }
          }
          this.setData(res, () => {
            setTimeout(() => {
              this.setData({
                ['prop.' + prop + '.status']: 3,
              })
            }, 300);
          });
        }, 1000);
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
      if (sprite == "redBull") {
        this.setData({
          level4Event: 1
        })
        setTimeout(() => {
          this.setData({
            level4Event: 2
          })
          setTimeout(() => {
            this.setData({
              level4Event: 3
            })
            setTimeout(() => {
              this.gameFail(2);
              this.setData({
                level4Event: 0
              })
            }, 1000)
          }, 1000)
        }, 1000)
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


})