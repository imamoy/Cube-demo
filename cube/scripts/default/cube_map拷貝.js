// Map style
var mapstyle = [
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#2c2e33"
            },
            {
                "saturation": 7
            },
            {
                "lightness": 19
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": -2
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -90
            },
            {
                "lightness": -8
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 69
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -78
            },
            {
                "lightness": 67
            },
            {
                "visibility": "simplified"
            }
        ]
    }
];

// Style for cluster
var styleByClusterSize = 5;
var clusterStyle = [
   {  // for < 5 markers in cluster
      'url': 'images/cube/icon/mark_cube_s.png',
      'textSize': '8', 
      'height': '35',
      'width': '35',
      'textColor': '#333'
   },
   {  // for 5-10 markers in cluster
      'url': 'https://code.essoduke.org/images/mc2.png',
      'textSize': '14', 
      'height': '85',
      'width': '85',
      'textColor': '#333'
   },
   {  // for > 10 markers in cluster
      'url': 'images/cube/icon/mark_cube_big.png',
      'textSize': '18', 
      'height': '120',
      'width': '120',
      'textColor': '#333'
   }
];

var labels = '<div class="top"><p>低於市價 <span class="f-yellow">5</span>件，平均低於 <span class="f-yellow">0.8%</span></p><p>高於市價 <span class="f-yellow">2</span>件，平均低於<span class="f-yellow">1.2%</span></p></div><div class="btm"><p>對比去年，房市市價增漲 <span class="f-yellow">0.5%</span></p></div>';

var text = '<div class="top"><p>低於市價 <span class="f-yellow">5</span>件，平均低於 <span class="f-yellow">0.8%</span></p><p>高於市價 <span class="f-yellow">2</span>件，平均低於<span class="f-yellow">1.2%</span></p></div><div class="btm"><p>對比去年，房市市價增漲 <span class="f-yellow">0.5%</span></p></div>';

var icon_up = {
    'url': 'images/cube/icon/house_up.png',
    'scaledSize': [32, 23]
}
var icon_down = {
   'url': 'images/cube/icon/house_down.png',
   'scaledSize': [32, 23]
}

var markerEvent = {
    // Click 事件
    'click' : function (e) {
        $('#cube-house').toggleClass('active');
        $('.mark-pop').toggleClass('active');
        $('.mark-pop').slideToggle();
    }
}

function propertyAvg(markers) {
    var up = 0;
    var down = 0;
    for(var i=0; i<markers.length; i++) {
        var price = parseInt(markers[i].priceTag, 10);
        var est = parseInt(markers[i].estimate, 10);
        if (est > price)
           up++;
        else
           down++;
        //diff += (est-price)/est;
    }
    //var avgDiff = (diff/markers.length).toFixed(2);
    var result = {estup: up, estdown: down}
    return result;
}

$(function() {

    $('#cube-map').tinyMapConfigure({
        // Google Maps API Key，預設 null
        'key': 'AIzaSyAcFYdBAGmfDFeI79we7JVIjw88qKOFZkM'
    });

    $('#cube-map').tinyMap({
        'center': ['25.034516521123315','121.56496524810791'],
        'zoom'  : 14,
        'styles': mapstyle,
        'markerCluster': {
           'zoomOnClick': false,
           'styles': clusterStyle,
           'calculator': function(markers, numStyles) {
               var index = 0, count = markers.length, dv = count, result = {};
               var upOrDownCount=propertyAvg(markers);
               while (dv > 0) {
                  dv = parseInt(dv - styleByClusterSize, 10);
                  index++;
               }
               index = Math.min(index, numStyles);
               result = {
                  text: count,
                  index: index
               };
               return result; 
           },
           'event': { // 叢集起始事件
              'clusterclick': function(s) {
                 // get marker and reset the cube-house content
                 m = s.getMarkers();  // this can get array of locations within the cluster, use id to identify what to display at #cube-house
                 c = s.getCenter(); 
                 cs = s.getSize();
                 $('#cube-house').toggleClass('active');
                 $('.mark-pop').toggleClass('active');
              },
/*
              'clusteringbegin': function(s) {
                 var self = this;
                 var zoom = self.map.getZoom();

                 // 預設 ClusterIconStyle 選項
                 var opt = {
                    'fontFamily': 'Tahoma,sans-serif', // Font family (CSS)
                    'textSize': '2rem', // Font size (CSS)
                    'anchorText': [-10, 0], // Text position offset
                    'url': '', // Icon Url
                    'height': 128, // Icon height
                    'width': 128 // Icon Width
                 };

                 // 縮放等級條件
                 switch (zoom) {
                    case 13:
                       opt.url = 'https://code.essoduke.org/images/mc1.png';
                       break;
                    case 14:
                       opt.url = 'https://code.essoduke.org/images/mc2.png';
                       break;
                    default:
                       opt.url = 'https://code.essoduke.org/images/mc3.png';
                       break;
                 }

                 // 設置叢集 style
                 self.setStyles([opt]);
              }
*/
           },
        },
        'marker': [
            {
                'addr': ['25.034516521123315','121.56496524810791'],
                'icon': icon_up,
                'newLabel': '1200萬',
                'newLabelCSS': 'test',
                'priceTag': '100', 'estimate': '110',
                'event': markerEvent
            },
            {'addr': ['25.04151536540612', '121.56354904174805'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '90'},
            {'addr': ['25.041282077030896', '121.56741142272949'], 'icon':icon_down,'event': markerEvent, 'priceTag': '120', 'estimate': '110'},
            {'addr': ['25.0383270525352', '121.57045841217041'], 'icon':icon_up,'event': markerEvent, 'priceTag': '124', 'estimate': '115' },
            {'addr': ['25.034516521123315','121.56496524810791'], 'icon':icon_down,'event': markerEvent, 'priceTag': '100', 'estimate': '110'},
            {'addr': ['25.037627167884715', '121.56732559204102'], 'icon':icon_up,'event': markerEvent, 'priceTag': '100', 'estimate': '120'},
            {'addr': ['25.039726809855434', '121.55633926391602'], 'icon':icon_down,'event': markerEvent, 'priceTag': '100', 'estimate': '100'},
            {'addr': ['25.037160575899154', '121.55350685119629'], 'icon':icon_up,'event': markerEvent, 'priceTag': '480', 'estimate': '510'},
            {'addr': ['25.035877438787317', '121.55715465545654'], 'icon':icon_up,'event': markerEvent, 'priceTag': '70', 'estimate': '90'},
            {'addr': ['25.033972149830436', '121.56063079833984'],'icon':icon_up,'event': markerEvent, 'priceTag': '100', 'estimate': '100'}, 
            {'addr': ['25.031794640503858', '121.56414985656738'], 'icon':icon_up,'event': markerEvent, 'priceTag': '100', 'estimate': '110'},
            {'addr': ['25.035255306871402', '121.56998634338379'], 'icon':icon_up,'event': markerEvent, 'priceTag': '100', 'estimate': '110'},
            {'addr': ['25.033855498524844', '121.5686559677124'], 'icon':icon_down,'event': markerEvent, 'priceTag': '80', 'estimate': '90'},
            {'addr': ['25.036927279240775', '121.57376289367676'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '82'},
            {'addr': ['25.041593128099265', '121.5723466873169'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '90'},
            {'addr': ['25.04485911668452', '121.56917095184326'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '92'},
            {'addr': ['25.04536455952624', '121.56402111053467'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '70'},
            {'addr': ['25.04380934412532', '121.55998706817627'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '90'},
            {'addr': ['25.041904178378704', '121.55848503112793'], 'icon':icon_down,'event': markerEvent, 'priceTag': '80', 'estimate': '94'},
            {'addr': ['25.038521464229383', '121.55900001525879'], 'icon':icon_up,'event': markerEvent, 'priceTag': '80', 'estimate': '90'} 
        ]
    }); 

  
});
