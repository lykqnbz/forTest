import Sprite from './sprite.js';
import Api from './api.js';
var api = new Api();
class Act extends Sprite {

  // 重置游戏状态
  reset(level) {
    var init = this.getLevel(level);
    return new Promise((resolve, reject) => {
      var obj = {
        prop: init.prop,
        sprite: init.sprite,
        current: 0,
        gameState: 0,
        getProp: {
          "name": "",
          "ifShow": false,
          "url": ""
        },
        menuShow: false,
        layerState: false
      }
      resolve(obj);
    })
  }

  // 道具拖动动作

  moveEvent(e, level, prop, eventIn, current, scale, index, result) {
    var init = this.getLevel(level);
    var touchs = e.touches[0];
    var pageX = touchs.pageX * scale;
    var pageY = touchs.pageY * scale;
    var event = false;
    if (eventIn != "") {
      event = init.prop[prop].event[eventIn];
    }
    var initX = init.prop[prop].initX;
    var initY = init.prop[prop].initY;

    var x = pageX - (30 * scale);
    var y = pageY - (30 * scale);

    // wholeStatus为有值且为0时表示 物品互动为获取动作，值为1时，表示为事件触发
    return new Promise((resolve, reject) => {
      if (event && pageX > event.leftX && pageX < event.rightX && pageY > event.topY && pageY < event.bottomY && current == event.current && result != -1) {
        var toWho = event.toWho;
        if (result == 0) {
          var obj = {
            ['prop.' + prop + '.x']: initX,
            ['prop.' + prop + '.y']: initY,
            ['prop.' + prop + '.curX']: x - (155 * index),
            ['prop.' + prop + '.curY']: y - 1200,
            ['sprite.' + toWho + '.status']: 1,
            wholeStatus: 0
          }
          resolve(obj);
        } else if (result == 1) {
          var obj = {
            ['prop.' + prop + '.x']: initX,
            ['prop.' + prop + '.y']: initY,
            ['sprite.' + toWho + '.status']: 1,
            wholeStatus: 1
          }
          resolve(obj);
        }
      } else {
        var obj = {
          ['prop.' + prop + '.x']: x - (155 * index),
          ['prop.' + prop + '.y']: y - 1200,
          wholeStatus: 2
        }
        resolve(obj);
      }
    })

  }

  // 道具拖动结束动作
  moveOver(prop, level) {
    var init = this.getLevel(level);
    var initX = init.prop[prop].initX;
    var initY = init.prop[prop].initY;
    return new Promise((resolve, reject) => {
      var obj = {
        ['prop.' + prop + '.x']: initX,
        ['prop.' + prop + '.y']: initY,
      }
      resolve(obj);
    })
  }

  // 普通物品简单的状态改变
  spriteChange(sprite, status) {
    var intStatus = 0;
    if (intStatus == status) {
      intStatus = 1;
    }
    return new Promise((resolve, reject) => {
      var obj = {
        ['sprite.' + sprite + '.status']: intStatus
      }
      resolve(obj);
    })
  }

  // 互动物品的状态改变成提示框
  spriteChangeHifi(level, sprite) {
    var init = this.getLevel(level);
    var getProp = {
      "name": sprite,
      "ifShow": true,
      "url": init.prop[sprite].propUrl
    }
    return new Promise((resolve, reject) => {
      var obj = {
        ['sprite.' + sprite + '.status']: 2,
        ['prop.' + sprite + '.status']: 2,
        getProp: getProp
      }
      resolve(obj);
    })
  }

  // 提示框点击OK确认获得物品
  spriteChangeGet(level, sprite) {
    var init = this.getLevel(level);
    var getProp = {
      "name": "",
      "ifShow": false,
      "url": ""
    }
    return new Promise((resolve, reject) => {
      var obj = {
        ['sprite.' + sprite + '.status']: 1,
        ['prop.' + sprite + '.status']: 1,
        getProp: getProp,
      }
      resolve(obj);
    })
  }

  // 游戏通过的物品状态改变
  spriteChangeWin(sprite, status) {

  }

  // 游戏胜利
  gameWin(index) {
    return new Promise((resolve, reject) => {
      var obj = {
        gameState: 1,
        gameSuccessImg: index
      }
      resolve(obj);
    })
  }
  // 游戏失败
  gameFail(index) {
    return new Promise((resolve, reject) => {
      var obj = {
        gameState: 2,
        gameFailImg: index
      }
      resolve(obj);
    })
  }
}

export default Act;