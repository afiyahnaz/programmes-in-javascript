//.....................parallel execution..............
function firstYear(a,b,c,d,e){
 var p = new Promise(function(resolve,reject){
setTimeout(()=>{
    var f = a+b+c+d+e;
    resolve(f);


},1000);
});
return p;
}
function secondYear(a,b,c,d,e){
    var p = new Promise(function(resolve,reject){
   setTimeout(()=>{
       var f = a+b+c+d+e;
       resolve(f);
   
   
   },1000);
   });
   return p;
   }
   function thirdYear(a,b,c,d,e){
    var p = new Promise(function(resolve,reject){
   setTimeout(()=>{
       var f = a+b+c+d+e;
       resolve(f);
   
   
   },1000);
   });
   return p;
   }
   function finalYear(a,b,c,d,e){
    var p = new Promise(function(resolve,reject){
   setTimeout(()=>{
       var f = a+b+c+d+e;
       resolve(f);
   
   
   },500);
   });
   return p;
   }
// ..........   first second third final execution............
var p1 =firstYear(50,50,50,50,50);
var p2 =secondYear(50,50,50,50,50);
var p3 =thirdYear(50,50,50,50,50);
var p4 =finalYear(50,50,50,50,50);
Promise.all([p1,p2,p3,p4])
.then(function(res){
    console.log(res,"res");
})
.catch(function(err){    //error catch function
    console.log(err);
});
