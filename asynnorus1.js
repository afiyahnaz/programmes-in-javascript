//erroe,success
//callee
function addAsync(a,b,cb){

setTimeout(()=>{
    if (a===0) {
     }
    var c = a+b;
   cb(c);

},1000);
}
//caller
addAsync(10,20,function(res){
    console.log(res);
});
//............. call back with success and failur...........
function addAsync(a,b,cb){
setTimeout(()=>{
    if(a===0){
        cb(null, "invalid Input");//error output
    }
    var c=a+b;

    cb(c);//success output
},1000);
}
// // //caller
addAsync(0,20, function(res,err){
  console.log(res,err);
}
);

//............. handle error..............
function addAsync(a,b,cb){
setTimeout(()=>{
    if(a===0){
        cb(null ,"invalid input");
    } else{
        var c=a +b;
    }
    cb(c); //success
},1000);
}
//callee
addAsync(0,20,function(res,err){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
    console.log(res,err);
});