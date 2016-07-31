// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
$(document).ready(function() {
  var myMap = L.map('map').setView([37.8, -96.9], 4);

  var svg = d3.select(myMap.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");

  d3.json("us-states.json", function(error, collection) {
    if (error) throw error;

  });

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
});
