var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1106421798290036,
          "pitch": 0.4425722537709067,
          "rotation": 6.283185307179586,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 1.1830697869267848,
          "pitch": 0.32885690846397253,
          "rotation": 12.566370614359176,
          "target": "2-dining-area-1"
        },
        {
          "yaw": 1.7472071502332973,
          "pitch": 0.41340173634771205,
          "rotation": 0.7853981633974483,
          "target": "0-entrance"
        },
        {
          "yaw": -0.6639931920640958,
          "pitch": 0.2585869457978571,
          "rotation": 6.283185307179586,
          "target": "5-dining-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area-1",
      "name": "Dining area 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6215448663928953,
        "pitch": -0.004881786197735494,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -1.6455184673680634,
          "pitch": 0.2137106557035242,
          "rotation": 0,
          "target": "3-scene"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-scene",
      "name": "Scene",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7949051255624386,
          "pitch": 0.21215992217921453,
          "rotation": 5.497787143782138,
          "target": "4-bar"
        },
        {
          "yaw": -1.5271123425155029,
          "pitch": 0.2108022522462214,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.630853884789545,
          "pitch": 0.19304530296752276,
          "rotation": 5.497787143782138,
          "target": "5-dining-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-area-2",
      "name": "Dining area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.2096043198349644,
        "pitch": 0.03483740078291575,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -0.5847641678366529,
          "pitch": 0.1583221129308825,
          "rotation": 10.995574287564278,
          "target": "1-lobby"
        },
        {
          "yaw": -0.333859720219305,
          "pitch": 0.17798840836136343,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.488732079783162,
          "pitch": 0.2672998601876131,
          "rotation": 5.497787143782138,
          "target": "4-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1933288135038147,
        "pitch": 0.004883104222130896,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 0.12889143910521916,
          "pitch": 0.049620791962478705,
          "rotation": 1.5707963267948966,
          "target": "7-wc"
        },
        {
          "yaw": 1.0330645906132414,
          "pitch": -0.19774571876351743,
          "rotation": 0.7853981633974483,
          "target": "8-lounge-area-2nd-floor"
        },
        {
          "yaw": 3.0395882853799865,
          "pitch": 0.29631858790921584,
          "rotation": 0,
          "target": "3-scene"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0398853274810964,
          "pitch": 0.1773409869110587,
          "rotation": 1.5707963267948966,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lounge-area-2nd-floor",
      "name": "Lounge area (2nd floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8765900073647224,
          "pitch": 0.1462020796451533,
          "rotation": 2.356194490192345,
          "target": "6-hallway"
        },
        {
          "yaw": 2.812571504683122,
          "pitch": 0.04929485964872171,
          "rotation": 7.0685834705770345,
          "target": "9-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-meeting-room",
      "name": "Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.095143089164404,
          "pitch": 0.1875196188303221,
          "rotation": 0,
          "target": "8-lounge-area-2nd-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
