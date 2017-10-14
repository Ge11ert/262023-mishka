var map;

function initMap() {

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

var icon = "./img/icon-map-pin.svg";

var position = new google.maps.LatLng(59.938601, 30.322997);

var marker = new google.maps.Marker({
  position: position,
  icon: icon,
  map: map
});
}
