//.......parallel execution with promises...........//

function addAsyns(a,b){
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
         var c = a+b;
         res(c);
        },2000);
    });
     return p;
    }
    function subAsyns(a,b){  //subAsyns................
        var p = new Promise(function(res,rej){
            setTimeout(()=>{
             var c = a-b;
             res(c);
            },2000);
        });
         return p;
        }
        function mulAsyns(a,b){    //mulAsyns............
            var p = new Promise(function(res,rej){
                setTimeout(()=>{
                 var c = a*b;
                 res(c);
                },1000);
            });
             return p;
            }
    //...........parallel exectution with promises..........
    // .parallel operations are independent.....
    addAsyns(10,20).then(function(res){
        console.log("add",res)
    });

    subAsyns(20,20).then(function(res){
        console.log("sub",res)
    });

     mulAsyns(10,20).then(function(res){
        console.log("mul",res)
    });

    //.... another method of parallel exectution with promise........
    var p1 = addAsyns(10,20);
    var p2 = subAsyns(20,20);
    var p3 = mulAsyns(10,20);
    Promise.all([p1, p2, p3])
    .then(function(res){
        console.log(res,"res"); 
    })                         
        .catch(function(err){    //error catch function
            console.log(err);
      
    });
    //.....to print one output...............
    var p1 =addAsyns(10,20);
    var p2 =subAsyns(20,20);
    var p3 = mulAsyns(10,20);
    Promise.any([p1,p2,p3])
    .then(function(res){
        console.log(res,"res");
    })
    .catch(function(err){    //error catch function
        console.log(err);
    });

;
