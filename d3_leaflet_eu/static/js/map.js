// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
$(document).ready(function() {
  var myMap = L.map('map').setView([37.8, -96.9], 4);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
});
