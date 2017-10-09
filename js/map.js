var map;

function initMap() {

  map = new google.maps.Map(document.querySelector(".contacts__map-container"),
{
  zoom: 17,
  center: new google.maps.LatLng(59.938601, 30.322997),
  mapTypeId: "roadmap"
});

var icon = "./img/icon-map-pin.svg";

var position = new google.maps.LatLng(59.938601, 30.322997);

var marker = new google.maps.Marker({
  position: position,
  icon: icon,
  map: map
});
}
