var five  = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var button   = new five.Button(2);
  var ledOne   = new five.Led(10);
  var ledTwo   = new five.Led(11);
  var ledThree = new five.Led(13);

  // HOLD
  button.on("hold", function() {
    ledOne.blink(1000);
    ledTwo.blink(800);
    ledThree.blink(600);
    console.log("Leds are blinking!");
    setTimeout(function(){
      ledOne.stop().off();
      ledTwo.stop().off();
      ledThree.stop().off();
      console.log("Leds blinking has stopped!")
    }, 3000)
  });

  // PRESS
  button.on("press", function() {
    ledOne.on();
    ledTwo.on();
    ledThree.on();
    console.log("Leds are on!");
  });

  // RELEASE
  button.on("release", function() {
    ledOne.off();
    ledTwo.off();
    ledThree.off();
    console.log("Leds are off!");
  });
});