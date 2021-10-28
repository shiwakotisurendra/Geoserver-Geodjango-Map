// adding fullscreen button
var mapId = document.getElementById("map");
function fullScreenView() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    mapId.requestFullscreen();
  }
}

// print map
$(".print-map").click(function () {
  window.print();
});

L.control.browserPrint({ position: "topright" }).addTo(map);

//Leaflet Search
L.Control.geocoder().addTo(map);

// measure function
L.control
  .measure({
    primaryLengthUnit: "kilometers",
    secondaryLengthUnit: "miles",
    primaryAreaUnit: "sqmeters",
    secondaryAreaUnit: "hectares",
  })
  .addTo(map);

//zoom to layer
$(".zoom-to-layer").click(function () {
  map.setView([28.3949, 84.124], 7);
});
