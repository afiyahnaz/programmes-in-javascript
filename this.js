"use strict";
function fn(){
    console.log(this);  //global
}

fn();

var m1 = {
    width:5,
    print:function (){
        function f1(){
            console.log(this.width);
        }
        f1();
    }
};
m1.print();