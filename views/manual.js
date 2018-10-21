$(window).on('load', function () {
    console.log("window loaded");
    $.get('/alloff')
    document.getElementById('change').onclick = function(){
        $.get('/change',function(){
            location.reload();
        })
    }
    document.getElementById('led1').onclick = function(){
        var state = document.getElementById('led1t').innerHTML.toString()
        if(state=="Currently LED1 is OFF"){
            $.get('/led1/on',function(data){
                console.log("here is "+data)
                document.getElementById('led1t').innerHTML="Currently LED1 is ON"
            })
        }
        else{
            $.get('/led1/off',function(){
                document.getElementById('led1t').innerHTML="Currently LED1 is OFF"
            })
        }
    }
    document.getElementById('led2').onclick = function(){
        var state = document.getElementById('led2t').innerHTML.toString()
        if(state=="Currently LED2 is OFF"){
            $.get('/led2/on',function(){
                document.getElementById('led2t').innerHTML="Currently LED2 is ON"
            })
        }
        else{
            $.get('/led2/off',function(){
                document.getElementById('led2t').innerHTML="Currently LED2 is OFF"
            })
        }
    }
    document.getElementById('led3').onclick = function(){
        var state = document.getElementById('led3t').innerHTML.toString()
        if(state=="Currently LED3 is OFF"){
            $.get('/led3/on',function(){
                document.getElementById('led3t').innerHTML="Currently LED3 is ON"
            })
        }
        else{
            $.get('/led3/off',function(){
                document.getElementById('led3t').innerHTML="Currently LED3 is OFF"
            })
        }
    }
    document.getElementById('led4').onclick = function(){
        var state = document.getElementById('led4t').innerHTML.toString()
        if(state=="Currently LED4 is OFF"){
            $.get('/led4/on',function(){
                document.getElementById('led4t').innerHTML="Currently LED4 is ON"
            })
        }
        else{
            $.get('/led4/off',function(){
                document.getElementById('led4t').innerHTML="Currently LED4 is OFF"
            })
        }
    }
    document.getElementById('led5').onclick = function(){
        var state = document.getElementById('led5t').innerHTML.toString()
        if(state=="Currently LED5 is OFF"){
            $.get('/led5/on',function(){
                document.getElementById('led5t').innerHTML="Currently LED5 is ON"
            })
        }
        else{
            $.get('/led5/off',function(){
                document.getElementById('led5t').innerHTML="Currently LED5 is OFF"
            })
        }
    }
});