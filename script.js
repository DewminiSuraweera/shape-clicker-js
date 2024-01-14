var start = new Date().getTime();

    function getRandomColor(){
        var letters = "0123456789ABCDEF";
        var color = '#'
    for (var i =0; i<6;i++){
        color = color + letters[Math.floor(Math.random()*16)];
    }
    return color;
    }

    function shapeAppear(){
        var top = Math.random()*600;
        var left = Math.random()*1700;
        var width = Math.random()*100;
        var height = Math.random()*100;
        if (Math.random()<0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else{
        document.getElementById("shape").style.borderRadius = "0%";
        
    }
        document.getElementById("shape").style.width = width;
        document.getElementById("shape").style.height = width;
        document.getElementById("shape").style.top = top;
        document.getElementById("shape").style.left = left;
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.display="block";
        start = new Date().getTime();
    }
    function shapeAppearDelay(){
    setTimeout(shapeAppear,Math.random()*300);     //do something after a time constant
    }
    shapeAppearDelay();
    document.getElementById("shape").onclick = function(){
        document.getElementById("shape").style.display="none";
        var end = new Date().getTime();
    var time = (end-start)/1000;
    //alert(time);
    document.getElementById("time").innerHTML= time+"s";
    shapeAppearDelay();
    }