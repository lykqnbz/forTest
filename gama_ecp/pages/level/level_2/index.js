import Api from '../../../utils/api.js';
import Act from '../../../utils/act.js';
var api = new Api();
var act = new Act();
var level = 2;
Page({
  data: {
    current: 0,
    gameState: 0,
    loadingMap: {
      "ifShow": true,
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
    }, 1500);
  },
  bindChange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  moveEvent(e) {
    var self = this;
    var prop = e.currentTarget.dataset.prop;
    // index获取道具所在位置索引，以便位置调控计算
    var index = 0;
    for (var key in this.data.prop) {
      if (this.data.prop[key].status == 1) {
        if (prop == key) {
          break;
        } else {
          index++;
        }
      }
    }

    var event = "";
    switch (prop) {
      case "pole":
        event = "fishKey";
        break;
      case "key":
        event = "openDoor";
        break;
    }
    var scale = this.data.scale;
    var current = this.data.current;
    var result = this.data.prop[prop].event[event].result;
    act.moveEvent(e, level, prop, event, current, scale, index, result).then((res) => {
      if (res.wholeStatus == 0) {

        // 第二关特别事件 鱼竿动作
        this.setData({
          ['sprite.movePole.status']: 1,
          layerState:true
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
                  })
                }, 300);
              });
            });
          });
        }, 2000);


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

  // 摸钥匙掉水事件
  level2Event1() {
    setTimeout(() => {
      this.setData({
        ['sprite.moveMan.status']: 2,
        layerState: true
      })
      setTimeout(() => {
        this.setData({
          ['sprite.moveMan.status']: 3,
        })
        setTimeout(() => {
          this.setData({
            ['sprite.moveMan.status']: 4,
          })
          setTimeout(() => {
            this.setData({
              ['sprite.moveMan.status']: 5,
            })
            setTimeout(() => {
              this.setData({
                ['sprite.moveMan.status']: 6,
              })
              setTimeout(() => {
                this.setData({
                  ['sprite.moveMan.status']: 7,
                })
                setTimeout(() => {
                  this.setData({
                    ['sprite.moveMan.status']: 8,
                  })
                  setTimeout(() => {
                    this.gameFail();
                  }, 1000);
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  }

})