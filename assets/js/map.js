//map
var script = document.createElement("script");
script.src =
    "https://maps.googleapis.com/maps/api/js?libraries=places,visualization&key=YOUR_API_KEY&v=weekly&callback=initMap";

script.async = true;
window.initMap = function () {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.12085),
        //api is demo
        zoom: 5,
    };
    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
    );
};
document.head.appendChild(script);
