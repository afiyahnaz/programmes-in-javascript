    //...........catching error function with promises..............
    function addAsyn(a,b){
        var p = new Promise(function(resolve,reject){
            setTimeout(()=>{
                if(a===0){
                   reject("invalid input");
                }
                else{
                    var c= a+b;
                    resolve(c);
                }
    
            },1000);
        });
        return p;
    }
    //..........catching error by promises in exceution...........
    var p = addAsyn(0,20);
    console.log(p);  //...........pending................
    p.then(function(resolve){
        console.log(p);//............resolve..........
    })
    .catch(function(reject){
        console.log(p);  //.............reject............
    });
    p.then(function(resolve){
        console.log("resolve",p);//...resolve..........
    })                             /*if you excuitive 
                                   again promise caches the result*/                               
        .catch(function(reject){
        console.log("reject",p);  //.............reject............
    });