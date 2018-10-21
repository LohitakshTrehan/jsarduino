$(window).on('load', function () {
    console.log("window loaded");
    document.getElementById('change').onclick = function(){
        $.get('/change',function(){
            location.reload();
        })
    }
});