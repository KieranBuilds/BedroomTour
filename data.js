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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.21727568239122874,
        "pitch": 0.007509062115142129,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.21770440071442998,
          "pitch": 0.5035197981814115,
          "rotation": 0,
          "target": "1-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3506768952309347,
          "pitch": -0.035488739136187775,
          "title": "Welcome to Bedroom Tour",
          "text": "<div>&nbsp;Please click the arrow sign hotspot to move throughout the space.</div><div><br></div><div>This tour is designed, 3D modelled and rendered by Kieran Builds.</div>"
        }
      ]
    },
    {
      "id": "1-center",
      "name": "Center",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.521387465641741,
          "pitch": 0.0025542515134411303,
          "rotation": 0,
          "target": "3-right-side"
        },
        {
          "yaw": -0.5191702171158958,
          "pitch": -0.03068050391754973,
          "rotation": 0,
          "target": "2-left-side"
        },
        {
          "yaw": -1.6355282713087789,
          "pitch": -0.035803786560416384,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left-side",
      "name": "Left Side",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.09715931471236772,
          "pitch": -0.000285895330264907,
          "rotation": 0,
          "target": "1-center"
        },
        {
          "yaw": -1.2000804750597922,
          "pitch": -0.00747353137586515,
          "rotation": 0,
          "target": "3-right-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right-side",
      "name": "Right Side",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.01853637045480383,
          "pitch": -0.04103178476133351,
          "rotation": 0,
          "target": "2-left-side"
        },
        {
          "yaw": -1.1780112240074132,
          "pitch": -0.04708510672587529,
          "rotation": 0,
          "target": "1-center"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Kieran Bedroom Sample",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
