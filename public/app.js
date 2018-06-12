const drawMap = function() {
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86515, -4.25763];
  const javaStreet = [55.801507, -4.003805];
  const Rio_De_Janeiro = [-22.970722, -43.1729];
  const zoomlevel = 15;
  const mainMap = new MapWrapper(mapDiv, Rio_De_Janeiro, zoomlevel);
  mainMap.addMarker(Rio_De_Janeiro);


  var button = document.querySelector('button');
   button.addEventListener('click', handleButtonClick);

   var handleButtonClick = function(){
  var pTag = document.querySelector('#button');
  pTag.innerText = 'Woa dude, I totally got clicked!';
}


}

window.addEventListener("load", drawMap);
