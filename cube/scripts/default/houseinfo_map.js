// Map style
var mapstyle = [
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
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

    $('.houseinfo-map').tinyMapConfigure({
        // Google Maps API Key，預設 null
        'key': 'AIzaSyAcFYdBAGmfDFeI79we7JVIjw88qKOFZkM'
    });

    $('.houseinfo-map').tinyMap({
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
           }
        //    'event': { // 叢集起始事件
        //       'clusterclick': function(s) {
        //          // get marker and reset the cube-house content
        //          m = s.getMarkers();  // this can get array of locations within the cluster, use id to identify what to display at #cube-house
        //          c = s.getCenter(); 
        //          cs = s.getSize();
        //          $('#cube-house').toggleClass('active');
        //          $('.mark-pop').toggleClass('active');
        //       },
        //    },
        },
        'marker': [
            {
                'addr': ['25.034516521123315','121.56496524810791'],
                'icon': icon_up,
                'newLabel': '1200萬',
                'newLabelCSS': 'houseinfo-Maplabel',
                'priceTag': '100', 'estimate': '110',
                'event': markerEvent
            }
        ]
    }); 

  
});
