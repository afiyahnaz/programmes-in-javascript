//......promises : resolve,rejected.........
//.........token....
//promise: pending, resolve, rejected

function addAsyns(a,b){
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            if(a===0){
                rej("invalid input");//rej
            }else{
            var c= a+b;
            res(c);  //resolve
            }
        },1000);

    });
    return p;
}
var res = addAsyns(10,20);
res.then(function(res){
    console.log(res);
});


