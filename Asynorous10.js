//....... secquential excutation with then catch function........

function firstYear(a,b,c,d,e){   //firstyear..........
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            var f= a+b+c+d+e;
            res(f);

        },2000);
    });
    return p;
}
function secondYear(a,b,c,d,e){   //secondyear................
   var p = new Promise(function(res,rej){
       setTimeout(()=>{
           var f= a+b+c+d+e;
           res(f);

       },3000);
   });
   return p;
}
function thirdYear(a,b,c,d,e){     //thirdyear................
   var p = new Promise(function(res,rej){
       setTimeout(()=>{
           var f= a+b+c+d+e;
           res(f);

       },1500);
   });
   return p;
}
function finalYear(a,b,c,d,e){     //finalyear................
    var p = new Promise(function(res,rej){
        setTimeout(()=>{
            var f= a+b+c+d+e;
            res(f);
 
        },500);
    });
    return p;
 }


//  execution of secquential execution first,second,third,fourth sem........
firstYear(50,50,50,50,50)
.then(function(res){
    return secondYear(res,50,50,50,50,50);
})
.then(function(secondres){
    return thirdYear(secondres,50,50,50,50,50);
})
.then(function(thirdres){
    return finalYear(thirdres,50,50,50,50,50);
})
.then(function(finalYear){
   console.log("final res",finalYear);
   return finalYear;
})
.catch(function(err){  //catch function used to catch error
    console.log(err);

});
            

















   
