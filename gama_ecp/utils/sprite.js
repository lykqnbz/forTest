class Sprite {
  getLevel(level) {
    var inie;
    switch (level) {
      case 1:
        var sprite = {
          "vase": {
            "status": 0
          },
          "key": {
            "status": 0
          },
          "cabinet": {
            "status": 0
          },
          "door": {
            "status": 0
          }
        }
        var prop = {
          "key": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_1_5.png",
            "propUrl": "/assets/sprite/level_1_8.png",
            "event": {
              "openDoor": {
                "toWho": "door",
                "leftX": 420,
                "rightX": 612,
                "topY": 215,
                "bottomY": 570,
                "current": 1,
                "result": 1,
              }
            }
          }
        }
        break;
      case 2:
        var sprite = {
          "pole": {
            "status": 0
          },
          "key": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "movePole": {
            "status": 0
          },
          "moveMan": {
            "status": 0
          }
        }
        var prop = {
          "key": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_1_5.png",
            "propUrl": "/assets/sprite/level_1_8.png",
            "event": {
              "openDoor": {
                "toWho": "door",
                "leftX": 279,
                "rightX": 471,
                "topY": 215,
                "bottomY": 570,
                "current": 1,
                "result": 1,
              }
            }
          },
          "pole": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_2_3.png",
            "propUrl": "/assets/sprite/level_2_3.png",
            "event": {
              "fishKey": {
                "toWho": "key",
                "leftX": 215,
                "rightX": 315,
                "topY": 310,
                "bottomY": 410,
                "current": 2,
                "result": 0,
              }
            },
          }
        }
        break;

      case 3:
        var sprite = {
          "vase": {
            "status": 0
          },
          "key": {
            "status": 0
          },
          "cabinet": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "bamboo": {
            "status": 0
          }
        }
        var prop = {
          "key": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_1_5.png",
            "propUrl": "/assets/sprite/level_1_8.png",
            "event": {
              "openDoor": {
                "toWho": "door",
                "leftX": 420,
                "rightX": 612,
                "topY": 215,
                "bottomY": 570,
                "current": 1,
                "result": 1,
              }
            }
          }
        }
        break;
      case 4:
        var sprite = {
          "vase": {
            "status": 0
          },
          "key": {
            "status": 0
          },
          "cabinet": {
            "status": 0
          },
          "door": {
            "status": 0
          }
        }
        var prop = {
          "key": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_1_5.png",
            "propUrl": "/assets/sprite/level_1_8.png",
            "event": {
              "openDoor": {
                "toWho": "door",
                "leftX": 420,
                "rightX": 612,
                "topY": 215,
                "bottomY": 570,
                "current": 1,
                "result": 1,
              }
            }
          }
        }
        break;
    }
    return {
      "sprite": sprite,
      "prop": prop
    };
  }

}

export default Sprite;