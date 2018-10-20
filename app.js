var five = require("johnny-five")
var path = require('path')
var express = require('express')
var board = new five.Board()
var led_1 = null
var led_2 = null
var led_3 = null
var led_4 = null
var led_5 = null
var sensor = null
var app = express()
var port = 8000

app.use(express.static(path.join(__dirname, 'views')));
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',function(req,res){
    res.render('index',{mode:'auto'});
})
board.on("ready", function() {
    console.log("### Board ready!");
    led_1 = new five.Led(13);
    led_2 = new five.Led(8);
    led_3 = new five.Led(7);
    led_4 = new five.Led(4);
    led_5 = new five.Led(2);
    sensor = new five.Sensor("A0");
});

app.get('/sensor',function(req,res){
    console.log(sensor.scaleTo(0,500))
    let val = sensor.scaleTo(0,500)
    if(val>400){
        led_1.on();led_2.off();led_3.off();led_4.off();led_5.off();
    }
    else if(val>300){
        led_1.on();led_2.on();led_3.off();led_4.off();led_5.off();
    }
    else if(val>200){
        led_1.on();led_2.on();led_3.on();led_4.off();led_5.off();
    }
    else if(val>100){
        led_1.on();led_2.on();led_3.on();led_4.on();led_5.off();
    }
    else{
        led_1.on();led_2.on();led_3.on();led_4.on();led_5.on();
    }
    res.send("OK")
})
app.get('/led_1/:mode', function (req, res) {
  if(led_1) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led_1.on();
        break;
      case "off":
        led_1.off();
        break;
	  default:
        status = "Unknown: " + req.params.mode;
        break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});
app.get('/led_2/:mode', function (req, res) {
  if(led_2) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led_2.on();
        break;
      case "off":
        led_2.off();
        break;
	  default:
        status = "Unknown: " + req.params.mode;
        break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});
app.get('/led_3/:mode', function (req, res) {
  if(led_3) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led_3.on();
        break;
      case "off":
        led_3.off();
        break;
	  default:
        status = "Unknown: " + req.params.mode;
        break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});
app.get('/led_4/:mode', function (req, res) {
  if(led_4) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led_4.on();
        break;
      case "off":
        led_4.off();
        break;
	  default:
        status = "Unknown: " + req.params.mode;
        break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});
app.get('/led_5/:mode', function (req, res) {
  if(led_5) {
    var status = "OK";
    switch(req.params.mode) {
      case "on":
        led_5.on();
        break;
      case "off":
        led_5.off();
        break;
	  default:
        status = "Unknown: " + req.params.mode;
        break;
     }
     console.log(status);
     res.send(status);
   } else {
     res.send('Board NOT ready!')
   }
});

app.listen(port, function () {
 console.log('Listening on port ' + port);
});
