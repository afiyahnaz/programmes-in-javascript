// ......creat.object intilization...........
var m1 = Object.create({},{
    width : {value:5,enumerable:false, Writable:false,configurable:true},
    height : {value:7,enumerable:true},
    color : { value:"red",enumerable:false, writable:false, configurable:false},
});

Object.defineProperty(m1,"width",{
 writable:true
});
m1.width=1000;


// Object.defineProperty(m1,"color",{
    // writable:true
// });
// m1.color="green";
// console.log(m1.width);
// console.log(m1.color);
// console.log(m1.height);
console.log(m1);


// ........inheritance in Object.create.........

var AbstractMobile={
    call:function(){
        console.log("calling...")
    }
};
var m1 = Object.create(AbstractMobile,{
    width:{value:4, writable:false, configurable:true},
    height:{value:5},
    color:{value:"black"}
})
Object.defineProperty(m1,"width",{
    writable:true});
m1.width=1000;
console.log(m1.width);
m1.call();




