// // .......parallel exucation  using call back............
function addAsyns(a,b,cb){
setTimeout(()=>{
var c= a+b;
cb(c);
},1000);
}

function subAsyns(a,b,cb){
    setTimeout(()=>{
        var c=a-b;
        cb(c);
    },1000);
    }

    function mulAsyns(a,b,cb){
        setTimeout(()=>{
            var c=a*b;
            cb(c);
        },1000);
        }
            addAsyns(10,20,function(res){
            console.log("add",res);
        });


subAsyns(20,10,function(res){
    console.log("sub",res)
});


mulAsyns(20,10,function(res){
    console.log("mul",res)
});

// ....sequential exucation in call backs................//
function addAsyns(a,b,cb){
setTimeout(()=>{
    var c = a+b;
    cb(c);
},1000);
}
function subAsyns(a,b,cb){
    setTimeout(()=>{
        var c = a-b;
        cb(c);
    },1000);
    }
    function mulAsyns(a,b,cb){
        setTimeout(()=>{
            var c = a*b;
            cb(c);
        },1000);
        }
        // .....sequential excutation...........
addAsyns(20,10,function(res){
    // console.log(res); //execution has finished

subAsyns(res,10,function(subres){
    // console.log(subres);//sub execution has finished


mulAsyns(subres,2,function(mulres){
    console.log(mulres);
});
});
});


