$(window).on('load', function () {
    console.log("window loaded");
    $.get('/alloff',function(){
        document.getElementById('led1t').style.backgroundColor="RED"
        document.getElementById('led2t').style.backgroundColor="RED"
        document.getElementById('led3t').style.backgroundColor="RED"
        document.getElementById('led4t').style.backgroundColor="RED"
        document.getElementById('led5t').style.backgroundColor="RED"
    })
    document.getElementById('change').onclick = function(){
        $.get('/change',function(){
            location.reload();
        })
    }
    document.getElementById('led1').onclick = function(){
        var state = document.getElementById('led1t').innerHTML.toString()
        if(state=="OFF"){
            $.get('/led1/on',function(data){
                console.log("here is "+data)
                document.getElementById('led1t').innerHTML="ON"
                document.getElementById('led1t').style.backgroundColor="GREEN"
            })
        }
        else{
            $.get('/led1/off',function(){
                document.getElementById('led1t').innerHTML="OFF"
                document.getElementById('led1t').style.backgroundColor="RED"
            })
        }
    }
    document.getElementById('led2').onclick = function(){
        var state = document.getElementById('led2t').innerHTML.toString()
        if(state=="OFF"){
            $.get('/led2/on',function(){
                document.getElementById('led2t').innerHTML="ON"
                document.getElementById('led2t').style.backgroundColor="GREEN"
            })
        }
        else{
            $.get('/led2/off',function(){
                document.getElementById('led2t').innerHTML="OFF"
                document.getElementById('led2t').style.backgroundColor="RED"
            })
        }
    }
    document.getElementById('led3').onclick = function(){
        var state = document.getElementById('led3t').innerHTML.toString()
        if(state=="OFF"){
            $.get('/led3/on',function(){
                document.getElementById('led3t').innerHTML="ON"
                document.getElementById('led3t').style.backgroundColor="GREEN"
            })
        }
        else{
            $.get('/led3/off',function(){
                document.getElementById('led3t').innerHTML="OFF"
                document.getElementById('led3t').style.backgroundColor="RED"
            })
        }
    }
    document.getElementById('led4').onclick = function(){
        var state = document.getElementById('led4t').innerHTML.toString()
        if(state=="OFF"){
            $.get('/led4/on',function(){
                document.getElementById('led4t').innerHTML="ON"
                document.getElementById('led4t').style.backgroundColor="GREEN"
            })
        }
        else{
            $.get('/led4/off',function(){
                document.getElementById('led4t').innerHTML="OFF"
                document.getElementById('led4t').style.backgroundColor="RED"
            })
        }
    }
    document.getElementById('led5').onclick = function(){
        var state = document.getElementById('led5t').innerHTML.toString()
        if(state=="OFF"){
            $.get('/led5/on',function(){
                document.getElementById('led5t').innerHTML="ON"
                document.getElementById('led5t').style.backgroundColor="GREEN"
            })
        }
        else{
            $.get('/led5/off',function(){
                document.getElementById('led5t').innerHTML="OFF"
                document.getElementById('led5t').style.backgroundColor="RED"
            })
        }
    }
});