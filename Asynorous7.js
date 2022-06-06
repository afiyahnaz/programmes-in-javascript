//....... secquential excutation with async await function........

function addAsync(a,b){   //addasyns..........
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            var c= a+b;
            res(c);

        },2000);
    });
    return p;
}
function subAsync(a,b){   //subAsyn................
   var p = new Promise(function(res,rej){
       setTimeout(()=>{
           var c= a-b;
           res(c);

       },1500);
   });
   return p;
}
function mulAsync(a,b){     //mulAsyn................
   var p = new Promise(function(res,rej){
       setTimeout(()=>{
           var c= a*b;
           res(c);

       },1000);
   });
   return p;
}
//IIFE: immedidately invoked function expression
//sync, async(callbacks,promises,async await)
//async: timers,files,bd,events,web services calls
async function init(){
    try{
     const addRes = await addAsync(10,20);
     const subRes = await subAsync(addRes, 10);
     const finalRes = await mulAsync(subRes,10);

     console.log(finalRes);
    } catch (e){
        console.log(e);
    }
}
init();