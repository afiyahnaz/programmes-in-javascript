const arr = [1,2,3,4,5];


//filter function
function filter(arr){

var res=[];
for(i=0;i<arr.length;i++){
    if(arr[i]%2===0) res.push (arr[i]);
}
return res;
}
console.log(filter(arr));


//............filter function..............
const arr15 = [1,5,4,9,8];
function filter(arr15){
    var res = [];
    for(i=0;i<arr.length;i++){
        if(arr15[i]%2===0) res.push(arr15[i]);
    }
    return res;
}
console.log(filter(arr15));
//.................filter element.................


function isEven(elem){
    return elem % 2 ===0;

}
var res = arr.filter(isEven);
console.log(res);
//odd numbers............
function isOdd(elem){
    return elem% 2!==0;

}
var res = arr.filter(isOdd);
console.log(res);
//..............filter function.................
var arr25 = [15,75,95,89,78];
function isEven(elem){
    return elem % 2===0;
}
var res = arr25.filter(isEven);
console.log(res);

//.........filter element..................
var arr26 = [45,85,86,95,75];
function isEven(elem){
    return elem % 2 ===0;
}
var res = arr26.filter(isEven);
console.log(res);


//.................reduce function......................
const arr30 = [12,54,84,86];
function sum(prev,current){
    return prev + current;
}
const res100 = arr30.reduce(sum);
console.log(res100);


////////////..................some function.............../////////
const arr31 = [2,2,5,7,9];
var res30 = arr31.some(elem => elem % 2 ===0);
console.log(res30);