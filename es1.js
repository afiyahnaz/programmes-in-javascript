// ............var function : var is function scoped............//

function fn(){
    if(true){
    var x = 10;
    }
    console.log(x);
}
fn();

// ..................let function  :  let is blocked scoped.................//

function fn(){
// var : function scoped
// let : block scoped
    if(true){
        if(true){
            let x =10;  
        }
    }
    console.log(x);
}
//const : block scoped
// if we use const we cant reassain any variable to it 
// means const x = 10;..............that value is fixed can not change and can not asain again to other variables..

const x= 10;
x = 100;
console.log(x); // throuing error that u r assiging to const


const arr = [1,2,3,4];
arr.push(60);

console.log(arr);

//............ assiging again to const variable.............
const arr = [10,20,30,40,50];
arr = [10,20,30,40,50];//we cant assin to const variables but we can modify
console.log(arr);//through an error assigining to const vaiable


// const also block scoped function as let function

//....................hosting.........................
function fn(){
    if(true){
        console.log(x); // we should declare x before intilization the variable 
        const x= 10;//instilization
      
    }
    
}
fn();
//.................string interpolation.............
var name = "john";
var age = 20;
// // var res = name + " is " + age + " years old ";

var res = `${name} is
 ${age} years old`;// with help of backticks we can write easyly with out contact..
console.log(res);   // we can write in an many lines


























































