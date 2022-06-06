// // ....arrow functions.............//

// function fn(){
//     console.log("hello");
// }
// fn();

// var fn = function (){
//     console.log("hello");
// }
// fn();

// var fn2=()=>{
//     console.log("hello");
// }
// fn2();

// // .arrow function................
// function add(){
//     a++;
//     b++;
//    var  c=a+b;
//    console.log(c);
// }

//  add() => {
//     a++;
//     b++;
//     var c= a+b;
//     console.log(c);

// }
// add(10,20);
// //
// function add(a,b){
//     return a+b;
// }

// (a,b) => a+b;

function addAsyn(a,b,cb){
    setTimeout(()=>{
        var c= a+b;
        cb(c);

    },1000);
       

    }
addAsyn(10,20,(res)=>{
    console.log(res);
});
//
"use strict:"
var mobile = {
    width:5,
    height:7,
    call:function(){
        (()=>{
            console.log(this);
        })();
    }
};
mobile.call();


















