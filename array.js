var arr = [1,2,3,4,5,6,7,8,9,0];
arr.push(10);
arr.push(11);
arr.pop();
// arr.shift();
arr.unshift(8);
console.log(arr);
console.log(arr.length);
var arr1 = ["naz",1,5,"afi"];
console.log(arr1.push(10));
arr1.push(100);
arr1.push("taj");
arr1.pop();
arr1.shift();
arr1.unshift("naz");
console.log(arr1);
 var arr2 = [];
 arr2.push(12);
 arr2.push(13);
 console.log(arr2);
 console.log(arr2.length);
 var arr3 = [45,87,"naz","afi","89",46,78];
 obj ={};
 console.log(arr3.length);
 console.log(arr3.lastIndexOf(586));
 console.log(Array.isArray(arr3));
 console.log(Array.isArray(obj));
 console.log(arr3.slice(0,2));
 console.log(arr3.slice(0,4));
 var newArr = arr3.slice(2,5);
 var newArr1 = arr3.slice(3,6);
 console.log(newArr1,newArr, arr3);
 console.log(arr3.slice(1,5));
 console.log(arr3.splice(1,5));
 var names = ["naz","afi","illa","fathima","sumaiah"];
 console.log(names.slice(1,3));
 console.log(names.splice(1,3));
var arr30 = ["naz",25,"illa","illa",9,89,87,25]
console.log(arr30.indexOf("illa"));
console.log(arr30.slice(1,4));
console.log(arr30.splice(1,4));
var arr35 = [45,78,95,45,95,65,"naz","afi","naz"];
var newArr35 = arr.slice(1,4);
console.log(newArr35,arr35);

var arr45 = ["naz","afi","illa"];
console.log(arr45.push(12));
console.log(arr45.pop("illa"));





