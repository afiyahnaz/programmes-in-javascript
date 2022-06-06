var mobile ={
    color1:"black",
    width:5,
    height:7,
    color2:"red",
    width:5,
    height:7,
    color3:"green",
    width:5,
    height:7,

    call:function(number){
        console.log("calling.....",number);
    
    },
    call1:function(busy){
        console.log(" speaking to someone else....",busy);


    },
    call2:function(notreachable){
        console.log(" number is out of coverage area....",notreachable);


    }
};
mobile.call();
mobile.call1();
mobile.call2();
mobile.width=1000;
console.log(mobile);
