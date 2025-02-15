var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "Outside",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.34647647576457885,
          "pitch": 0.1411686281000275,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom",
      "name": "Livingroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.752377464703426,
          "pitch": 0.3681050626642044,
          "rotation": 0,
          "target": "0-outside"
        },
        {
          "yaw": 2.664434284998549,
          "pitch": 0.3862348161920046,
          "rotation": 0,
          "target": "2-dininfroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dininfroom",
      "name": "Dininfroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12331555189867416,
          "pitch": 0.33297166414801893,
          "rotation": 5.497787143782138,
          "target": "1-livingroom"
        },
        {
          "yaw": -2.1641481421988242,
          "pitch": 0.6462682795574874,
          "rotation": 12.566370614359176,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.4604476108176314,
          "pitch": 0.5062159961874588,
          "rotation": 11.780972450961727,
          "target": "3-kitchien--bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchien--bath",
      "name": "Kitchien & Bath",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01625590584817793,
          "pitch": 0.36785571261727235,
          "rotation": 0,
          "target": "2-dininfroom"
        },
        {
          "yaw": -0.2705212878803156,
          "pitch": 0.4843690895997508,
          "rotation": 4.71238898038469,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7083803655459331,
          "pitch": 0.5788984408205184,
          "rotation": 0.7853981633974483,
          "target": "3-kitchien--bath"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
