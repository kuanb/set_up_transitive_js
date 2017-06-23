var d3 = require('d3');
var Transitive = require('transitive-js');

var transitive = new Transitive({
  el: document.getElementById('canvas'),
  legendEl : document.getElementById('legend'),
  data: DATA,
  // styles: STYLES,
  gridCellSize: 300,
  useDynamicRendering: true,
  drawGrid: false,
  mapboxId: 'pk.eyJ1Ijoia3VhbmIiLCJhIjoidXdWUVZ2USJ9.qNKXXP6z9_fKA8qrmpOi6Q'
});

transitive.render();
