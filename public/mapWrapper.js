const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
this.map = L.map(element)
.addLayer(osmLayer)
.setView(coords, zoom);
this.map.on("click", function(event){
  this.addMarker(event.latlng);
}.bind(this))
}


// MapWrapper.prototype.panToSomewhere = function (coords) {
//  this.map.panTo(coords)
// };

MapWrapper.prototype.takeMeToRio = function (coords){
  this.map.panTo(coords);



  // L.marker(coords).addTo(this.map).bindPopup(`<a href ='http://www.rio.com/practical-rio/copacabana-beach'>more information</a>`).openPopup()
  // L.marker(coords).flyTo(coords);
  // L.marker(coords).flyTo(latlng, 15, zoom);
}



MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};
