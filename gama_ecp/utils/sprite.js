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
          "workerGrey": {
            "status": 0
          },
          "workerYellow": {
            "status": 0
          },
          "boss": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "washRoomLeft": {
            "status": 0
          },
          "washRoomRight": {
            "status": 0
          },
          "banana1": {
            "status": 0
          },
          "banana2": {
            "status": 0
          },
          "banana3": {
            "status": 0
          },
          "redBull": {
            "status": 0
          }
        }
        var prop = {
          "banana1": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_4_5.png",
            "propUrl": "/assets/sprite/level_4_5.png",
            "event": {
              "giveWorkerG": {
                "toWho": "workerGrey",
                "leftX": 70,
                "rightX": 206,
                "topY": 505,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              },
              "giveWorkerY": {
                "toWho": "workerYellow",
                "leftX": 365,
                "rightX": 509,
                "topY": 650,
                "bottomY": 1055,
                "current": 1,
                "result": 1,
              },
              "giveBoss": {
                "toWho": "boss",
                "leftX": 315,
                "rightX": 451,
                "topY": 515,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              }
            }
          },
          "banana2": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_4_5.png",
            "propUrl": "/assets/sprite/level_4_5.png",
            "event": {
              "giveWorkerG": {
                "toWho": "workerGrey",
                "leftX": 70,
                "rightX": 206,
                "topY": 505,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              },
              "giveWorkerY": {
                "toWho": "workerYellow",
                "leftX": 365,
                "rightX": 509,
                "topY": 650,
                "bottomY": 1055,
                "current": 1,
                "result": 1,
              },
              "giveBoss": {
                "toWho": "boss",
                "leftX": 315,
                "rightX": 451,
                "topY": 515,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              }
            }
          },
          "banana3": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_4_5.png",
            "propUrl": "/assets/sprite/level_4_5.png",
            "event": {
              "giveWorkerG": {
                "toWho": "workerGrey",
                "leftX": 70,
                "rightX": 206,
                "topY": 505,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              },
              "giveWorkerY": {
                "toWho": "workerYellow",
                "leftX": 365,
                "rightX": 509,
                "topY": 650,
                "bottomY": 1055,
                "current": 1,
                "result": 1,
              },
              "giveBoss": {
                "toWho": "boss",
                "leftX": 315,
                "rightX": 451,
                "topY": 515,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              }
            }
          },
          "redBull": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_4_6.png",
            "propUrl": "/assets/sprite/level_4_6.png",
            "event": {
              "giveWorkerG": {
                "toWho": "",
                "leftX": 70,
                "rightX": 206,
                "topY": 505,
                "bottomY": 685,
                "current": 0,
                "result": 1,
              }
            }
          }
        }
        break;
      case 5:
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
          "paintLeft": {
            "status": 0
          },
          "paintRight": {
            "status": 0
          },
          "bossFront": {
            "status": 0
          },
          "bossBack": {
            "status": 0
          },
          "movePole": {
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
                "leftX": 285,
                "rightX": 435,
                "topY": 450,
                "bottomY": 784,
                "current": 2,
                "result": 0,
              }
            },
          },
          "paintLeft": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_5_2.png",
            "propUrl": "/assets/sprite/level_5_2.png",
            "event": {
              "changePaint": {
                "toWho": "paintRight",
                "leftX": 285,
                "rightX": 423,
                "topY": 210,
                "bottomY": 385,
                "current": 2,
                "result": 1,
              }
            },
          },
        }
        break;
      case 6:
        var sprite = {
          "stoneTom": {
            "status": 0
          },
          "stoneHarry": {
            "status": 0
          },
          "stoneDick": {
            "status": 0
          },
        }
        var prop = {
          "revolver": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_6_5.png",
            "propUrl": "/assets/sprite/level_6_5.png",
            "event": {}
          },
        }
        break;

      case 7:
        var sprite = {
          "sportsCabinetLeft": {
            "status": 0
          },
          "sportsCabinetCenter": {
            "status": 0
          },
          "sportsCabinetRight": {
            "status": 0
          },
          "photo": {
            "status": 0
          },
          "revolver": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "key": {
            "status": 0
          }

        }
        var prop = {
          "revolver": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_6_5.png",
            "propUrl": "/assets/sprite/level_6_5.png",
            "event": {}
          },
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
        }
        break;

      case 8:
        var sprite = {
          "holeLeft": {
            "status": 0
          },
          "holeRight": {
            "status": 0
          },
        }
        var prop = {}
        break;
      case 9:
        var sprite = {
          "ketchup": {
            "status": 0
          },
          "body": {
            "status": 0
          },
          "doctor": {
            "status": 0,
            "move": 0,
          },
          "hamal": {
            "status": 0,
            "move": 0,
          },
          "door": {
            "status": 0
          },
        }
        var prop = {
          "ketchup": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_9_1.png",
            "propUrl": "/assets/sprite/level_9_1.png",
            "event": {
              "pour": {
                "toWho": "body",
                "leftX": 205,
                "rightX": 521,
                "topY": 795,
                "bottomY": 1097,
                "current": 1,
                "result": 1,
              }
            }
          },
        }
        break;
      case 10:
        var sprite = {
          "hammer": {
            "status": 0
          },
          "cleft": {
            "status": 0
          },
          "door": {
            "status": 0
          },
          "key": {
            "status": 0
          },
          "door1": {
            "status": 0
          },
          "door2": {
            "status": 0
          },
          "door3": {
            "status": 0
          },
          "door4Left": {
            "status": 0
          },
          "door4Right": {
            "status": 0
          },
          "door5": {
            "status": 0
          },
        }
        var prop = {
          "hammer": {
            "status": 0,
            "x": 0,
            "y": 0,
            "initX": 0,
            "initY": 0,
            "url": "/assets/sprite/level_10_3.png",
            "propUrl": "/assets/sprite/level_10_3.png",
            "event": {
              "smashWall": {
                "toWho": "cleft",
                "leftX": 535,
                "rightX": 645,
                "topY": 425,
                "bottomY": 532,
                "current": 0,
                "result": 1,
              }
            }
          },
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