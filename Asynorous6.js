//............ exceution using Async await method...........
function addAsyns(a,b,){
    var p = new Promise(function(resolve,reject){
setTimeout(()=>{
    if(a===0){
    }
    else{
    var c = a+b;
    resolve(c);
    }
},1000);

});
return p;
}
//... using   async await......... 
async function init(){   
    try {     
        var res = await addAsyns (0,20);
      console.log("res",res);   
    } catch (e){
        console.log(e);
    }
    finally{
        console.log("finally");  //clean up
    }
}
init();