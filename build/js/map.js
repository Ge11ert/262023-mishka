var map;

window.initMap = function() {

  map = new google.maps.Map(document.querySelector(".contacts__map-container"),
{
  zoom: 17,
  center: new google.maps.LatLng(59.938601, 30.322997),
  mapTypeId: "roadmap"
});

google.maps.event.addListener(map, "tilesloaded", function() {
  [].slice.apply(document.querySelectorAll(".contacts__map-container a")).forEach(function(item) {
    item.setAttribute("tabIndex","-1");
  });
});

var icon = {
  url: "./img/icon-map-pin.svg",
  scaledSize: new google.maps.Size(66,101)
};

var position = new google.maps.LatLng(59.938601, 30.322997);

var marker = new google.maps.Marker({
  position: position,
  icon: icon,
  optimized: false,
  map: map
});
}
