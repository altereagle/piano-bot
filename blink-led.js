var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var ledOne   = new five.Led(10);
  var ledTwo   = new five.Led(11);
  var ledThree = new five.Led(13);
  ledOne.blink(1000);
  ledTwo.blink(1000);
  ledThree.blink(1000);
});