document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('colorButton');
    var body = document.getElementsByTagName('body')[0];
    var text = document.getElementsByClassName('main-text')[0];
  
    button.addEventListener('click', function() {
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      body.style.backgroundColor = randomColor;
  
      var textBrightness = calculateBrightness(randomColor);
      text.style.color = textBrightness > 127 ? '#333' : '#fff';
    });
  
    function calculateBrightness(color) {
      var rgb = color.substring(1); // Remove the '#'
      var r = parseInt(rgb.substring(0, 2), 16);
      var g = parseInt(rgb.substring(2, 4), 16);
      var b = parseInt(rgb.substring(4, 6), 16);
      return (r * 299 + g * 587 + b * 114) / 1000;
    }
  });
  