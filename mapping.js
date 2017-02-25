$(function () {

    var map = null;
    myMap();

    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(49.2057, -122.939603),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }


    function plotBus() {

    }

    function plotSkytrain()  {

    }

    function plotTraffic() {

    }



});

