// transform [2,4,6,8,10]
//transform is used to do function with every array
// function transform(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]*3;
    
//     }
//     console.log(arr);
// }
// const arr =[1,2,3,4,5];
// transform(arr);


//transform
const arr = [1,2,3,4,5];

function times2(elem){
    return elem *2;
}

function times3(elem){
    return elem *3;
}
//...........higher order function...............
const res = arr.map(times2);
const res2 = arr.map(times3);
console.log(res,res2);

//covert in to a arrow function
const res3 = arr.map(elem=> elem*5);
const res4 = arr.map(elem=>elem*7);
console.log(res3,res4);


//parseint function

function addSum(a,b){
    var c = a+b;
    return c;

}
var res10= (parseInt( addSum("0200.025","0100.254")));
console.log(res10);

//map function

var arr20=[1,2,3,4];
var arr21=[45,84,98];
const res20=arr20.map(elem=>elem*5);
const res21=arr21.map(elem=>elem*5);

console.log(arr20,res20);

//map functions
 var arr16 =[4,8,9,10];
 var arr17=[14,45,78];
 var arr18=[14,54,85];
 const res16 = arr16.map(elem=>elem*5);
 const res17 = arr17.map(elem=>elem/5);
 const res18= arr18.map(elem=>elem+10);
 console.log(res16,res17,res18);



