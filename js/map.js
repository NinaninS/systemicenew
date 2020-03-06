var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map-block', {
        center: [55.76, 37.64],
        zoom: 12
    }, {
        searchControlProvider: 0
    });

    myGeoObject = new ymaps.GeoObject();

    myMap.geoObjects.add(myGeoObject).add(new ymaps.Placemark([55.76, 37.64], {
        balloonContent: ''
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    }))
}