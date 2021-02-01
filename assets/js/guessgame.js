
var oldSelection = null ;

var selectCircle = function(position){
    if(oldSelection != null){
        document.getElementById(oldSelection).setAttribute("class","");
    }
    document.getElementById(position).setAttribute("class","loveImg");
    oldSelection = position;
};


function getRandom(){
    var i = Math.floor(Math.random() * 9) + 1;
    return i;
}


setInterval(function(){
    var position = getRandom();
    selectCircle(position);
},1000);













/**/





/*function work(pan,pam, callback){
 alert("started eatin"+pan + pam);
 callback();
 }

 work("cake","bui",function(){
 alert("ok am done eating ")
 });*/








