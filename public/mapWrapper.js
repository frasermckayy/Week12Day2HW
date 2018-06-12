const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
this.map = L.map(element)
.addLayer(osmLayer)
.setView(coords, zoom);
this.map.on("click", function(event){
  this.addMarker(event.latlng);
}.bind(this))
}



MapWrapper.prototype.takeMeToRio = function (coords){
  L.marker(coords).flyTo(this.map);
  // L.marker(coords).flyTo(latlng, 15, zoom);
}



MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};
