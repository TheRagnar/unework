if($('.front-map__map').length > 0) {
    ymaps.ready(init);
    function init(){
        var myMap;
        myMap = new ymaps.Map("map", {
            center: [55.751057, 37.582403],
            zoom: 16,
            controls: [],
        });
    
        var position = myMap.getGlobalPixelCenter();
        myMap.setGlobalPixelCenter([ position[0] , position[1] ]);
        myMap.behaviors.disable('scrollZoom');
    
        var myPlacemark = new ymaps.Placemark([55.751057, 37.582403] , {},
            { iconLayout: 'default#image',
                iconImageHref: 'static/img/general/marker.png',
                iconImageSize: [54, 54],
                iconImageOffset: [-27, -27] });
    
        myMap.geoObjects.add(myPlacemark);
    }
    
}