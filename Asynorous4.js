//....... secquential excutation in promises........

 function addAsyn(a,b){   //addasyns..........
     var p = new Promise(function(res,rej){
         setTimeout(()=>{
             var c= a+b;
             res(c);

         },2000);
     });
     return p;
 }
 function subAsyn(a,b){   //subAsyn................
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            var c= a-b;
            res(c);

        },1500);
    });
    return p;
}
function mulAsyn(a,b){     //mulAsyn................
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            var c= a*b;
            res(c);

        },1000);
    });
    return p;
}
//....secquential exectution in promises...................
 /* addAsyn(10,20).then(function(res){  //addsequentially
  

 
 subAsyn(res,20).then(function(subres){   // subsequentially
 


mulAsyn(subres,20).then(function(mulres){   //mulsequentially
    console.log("mul",mulres);
});
});
});*/
//............secquential exectution with another method............
addAsyn(10,20)
.then(function(res){
    return subAsyn(res,20);
})
.then(function(subres){
    return mulAsyn(subres,20);
})
.then(function(mulres){
    console.log("final res",mulres);
    return mulres;
})
.then(function(val){ /*anything return from promise that
                             wrap in new function*/ 
    console.log(val);
})
.catch(function(err){  //catch function used to catch error
    console.log(err);

});