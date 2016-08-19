$(document).ready(function() {
  var myMap = L.map('map').setView([37.8, -96.9], 4);

  var svg = d3.select(myMap.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");

  function projectPoint(x, y) {
    var point = myMap.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
  }

  d3.json("static/js/us-states.json", function(error, collection) {
    if (error) throw error;
    
    var transform = d3.geoTransform({point: projectPoint}),
      path = d3.geoPath().projection(transform);
    
    var feature = g.selectAll("path")
        .data(collection.features)
        .enter().append("path");

    myMap.on("viewreset", reset);
    reset();

    // Reposition the SVG to cover the features.
    function reset() {
      var bounds = path.bounds(collection),
        topLeft = bounds[0],
        bottomRight = bounds[1];

    svg.attr("width", bottomRight[0] - topLeft[0])
    .attr("height", bottomRight[1] - topLeft[1])
    .style("left", topLeft[0] + "px")
    .style("top", topLeft[1] + "px");

    g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
  
    feature.attr("d", path);
  }
});

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
});
