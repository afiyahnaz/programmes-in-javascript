//............parallel excution using Asyns and wait...........

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
            async function addno(){
                var res = await addAsyns(10,20);
                console.log("res",res);
            }
            addno();
            async function subno(){
                var res = await subAsyns(20,20);
                console.log("res",res);
            }
            subno();
            async function mulno(){
                var res = await mulAsyns(2,20);
                console.log("res",res);
            }
            mulno();
           