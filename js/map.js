function initMap() {
    var uluru = {
        lat: 33.552745,
        lng: 35.374630
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
