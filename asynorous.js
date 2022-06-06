/*// ................setTimeout.................//
function fn(){
    console.log("fn()");
}
setTimeout(fn,1000);
// // ..................setInterval................//
function fn(){
    console.log("fn()");
}
setInterval(fn,1000);
// // .............setInterval can also write like this..............//


setInterval(function(){
    console.log(new Date());
},1000);
// .............asyncoronous ............
// ................setTimeout syntax..................//
setTimeout(function(){
    console.log("love");
},1000);
// .....setInterval syntax.....................//
setInterval(function(){
    console.log("love");
},1000);
// ..............asynorous function............// */
function addAsyn(a,b, cb){
   console.log("line14");
    
    setTimeout(function(){
        console.log("line 15");
        a++;
        b++;
        var c= a+b;
        console.log("line 20");
      cb(c);
     },1000);
     console.log("line23");
    }

    //entity 1
    function phoneNumber(res){
        console.log("task finished",res);
    }
var res= addAsyn(10,20,phoneNumber);
console.log("result",res);


