$(function () {

    var map = null;
    myMap();

    $("#submit").click(function() {
        console.log('clicked submit');
        if($('#bus').is(':checked')){
            plotBus()
        }

        if($('#skytrain').is(':checked')){
            plotSkytrain()
        }

        if($('#traffic').is(':checked')){
            plotTraffic()
        }

    });


    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(49.2057, -122.939603),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }


    function plotBus() {
        console.log('plotting bus');

    }

    function plotSkytrain()  {
        console.log('plotting skytrain');

    }

    function plotTraffic() {
        console.log('plotting traffic');

    }



});

