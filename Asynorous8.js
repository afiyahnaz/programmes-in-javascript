//..... synorous to Asynorous function...........
(function (){
    for(var i=0; i<100000;i++){
        setTimeout(function(){
            console.log(i);
        },1000);
    }
})();
