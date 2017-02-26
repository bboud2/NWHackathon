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
            center: new google.maps.LatLng(49.206744, -122.910930),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }


    function plotBus() {
        console.log('plotting bus');

        $(function () {
            $.getJSON('mapdata/BUS_STOPS.json', function (data) {
                console.log('parsed bus data successfully');

                for (var i = 0; i < data.length; i ++) {

                    var lon = parseFloat(data[i].X);
                    var lat = parseFloat(data[i].Y);

                    var latlng = new google.maps.LatLng(lat, lon);

                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        title: 'testing'
                    });
                    marker.setMap(map);


                    // google.maps.event.addListener(marker, "click", (function(marker) {
                    //     return function(evt) {
                    //         var content = marker.getTitle();
                    //         infowindow.setContent(contentString);
                    //         infowindow.open(map, marker);
                    //     }
                    // })(marker));
                }


            }).error(function () {
                console.log('error');
            });
        });
    }

    function plotSkytrain()  {
        console.log('plotting skytrain');

    }

    function plotTraffic() {
        console.log('plotting traffic');

    }



});
