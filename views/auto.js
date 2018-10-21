$(window).on('load', function () {
    console.log("window loaded");
    var led_1 = document.getElementById('led1')
    var led_2 = document.getElementById('led2')
    var led_3 = document.getElementById('led3')
    var led_4 = document.getElementById('led4')
    var led_5 = document.getElementById('led5')
    $.get('/alloff')
    var id = null
    var working = false;
    var current_intensity=null;
    document.getElementById('change').onclick = function(){
        $.get('/change',function(){
            working = false;
            if(id!=null){
                clearTimeout(id);
                id=null
            }
            led_1.innerHTML="OFF";led_2.innerHTML="OFF";led_3.innerHTML="OFF";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
            location.reload();
        })
    }
    var fun = function(){
        $.get('/sensor',function(val){
            if(val==500){
                led_1.innerHTML="OFF";led_2.innerHTML="OFF";led_3.innerHTML="OFF";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
              }
              else if(val>400){
                led_1.innerHTML="ON";led_2.innerHTML="OFF";led_3.innerHTML="OFF";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
              }
              else if(val>300){
                led_1.innerHTML="ON";led_2.innerHTML="ON";led_3.innerHTML="OFF";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
              }
              else if(val>200){
                led_1.innerHTML="ON";led_2.innerHTML="ON";led_3.innerHTML="ON";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
              }
              else if(val>100){
                led_1.innerHTML="ON";led_2.innerHTML="ON";led_3.innerHTML="ON";led_4.innerHTML="ON";led_5.innerHTML="OFF";
              }
              else{
                led_1.innerHTML="ON";led_2.innerHTML="ON";led_3.innerHTML="ON";led_4.innerHTML="ON";led_5.innerHTML="ON";
              }
            id = setTimeout(fun,2000);
        })
    }
    document.getElementById('master').onclick = function(){//attach timeout event to this button, and when you stop it, clear all ids, turn all off
        if(!working){
            id=setTimeout(fun,1000)
            working=!working;
        }
        else{
            if(id!=null){
                clearTimeout(id);
                id=null
            }
            $.get('/alloff',function(){
                working=!working;
                led_1.innerHTML="OFF";led_2.innerHTML="OFF";led_3.innerHTML="OFF";led_4.innerHTML="OFF";led_5.innerHTML="OFF";
            })
        }
    }
});