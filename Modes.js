// ..............Modes............ //
 
"use strict";//es5
//sloppy
// ..............if writable is false it through a error...........
var m1 = Object.create({},{
    width : {value:5,enumerable:true, writable:true,configurable:false},
    height : {value:7,enumerable:true},
    color : { value:"red",enumerable:false, writable:false, configurable:false},
});


m1.width=1000;
console.log(m1.width);

// ............with out declaring a variable.............
var x=10;
console.log(x);

// ...............if it has same or duplicate parameters..............
function fn(a,a){
    console.log(a+a);
}
fn(20,10);
// .......................smooth transition...............
x=100;//var is not defined yet getting answer
console.log(x);
//smooth transition
function addUser(){
    "use strict";
    var y=100;
    console.log(y);
}
addUser();
