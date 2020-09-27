// Map style
var mapstyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

var labels = '<div class="top"><p>低於市價 <span class="f-yellow">5</span>件，平均低於 <span class="f-yellow">0.8%</span></p><p>高於市價 <span class="f-yellow">2</span>件，平均低於<span class="f-yellow">1.2%</span></p></div><div class="btm"><p>對比去年，房市市價增漲 <span class="f-yellow">0.5%</span></p></div>';

var icon = {
    'url': 'images/icon/mark.png',
    'scaledSize': [64, 64]
}

var markerEvent = {
    // Click 事件
    'click' : function (e) {
        $('#cube-house').toggleClass('active');
        $('.mark-pop').toggleClass('active');
    }
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
        'markerCluster': true,
        'marker': [
            {
                'addr': ['25.034516521123315','121.56496524810791'],
                'icon': icon,
                'newLabel': labels,
                'newLabelCSS': 'mark-pop',
                'event': markerEvent
            },
            {'addr': ['25.04151536540612', '121.56354904174805'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.041282077030896', '121.56741142272949'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.0383270525352', '121.57045841217041'], 'icon':icon,'event': markerEvent },
            {'addr': ['25.034516521123315','121.56496524810791'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.037627167884715', '121.56732559204102'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.039726809855434', '121.55633926391602'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.037160575899154', '121.55350685119629'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.035877438787317', '121.55715465545654'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.033972149830436', '121.56063079833984'],'icon':icon,'event': markerEvent},            
            {'addr': ['25.031794640503858', '121.56414985656738'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.035255306871402', '121.56998634338379'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.033855498524844', '121.5686559677124'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.036927279240775', '121.57376289367676'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.041593128099265', '121.5723466873169'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.04485911668452', '121.56917095184326'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.04536455952624', '121.56402111053467'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.04380934412532', '121.55998706817627'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.041904178378704', '121.55848503112793'], 'icon':icon,'event': markerEvent},
            {'addr': ['25.038521464229383', '121.55900001525879'], 'icon':icon,'event': markerEvent}           
        ]
    }); 

  
});


