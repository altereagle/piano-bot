var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A5");

  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.scale(0, 10).on("change", function() {
    console.log(this.value);
  });
});