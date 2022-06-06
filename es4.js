// ...........spread operator in arrays...................
const arr1 = [10,20,30,40];
const arr2 = [50,60,70,80];

const res = [...arr1, ...arr2]//.... is merging
console.log(res,arr1,arr2);


function add(a,b,c,d){
    e=a+b+c+d;
    console.log(e);
}
var arr =[10,20,30,40];
// add(arr[0],arr[1],arr[2],arr[3]);
add(...arr);
// // ....spread operator in strings.........

function add(a,b,c,d){
    e=a+b+c+d;
    console.log(e);
}
var str =[" afi " ," is "," good "," girl "];
add(...str);






