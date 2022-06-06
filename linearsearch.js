// given an array return wether an element exist or not
// ex: [10,20,30,40,50] k:40 true; k:35 false;

function linearsearch(arr,k){
    for(i=0;i<=arr.length;i++){
        if(arr[i]===k)
        return true;
    }
    return false;
}
var arr = [100,20,30,40,50];
var res =  linearsearch(arr,30);
console.log(res);


// given an array return index an element exist or not
// ex: [10,20,30,40,50] k:40 true; k:35 false;

function linearSearch(arr,k){
    for(i=0;i<arr.length;i++){
        if(arr[i]===k)
         return i;
    }
    return false;
}
var arr = [10,20,30,40,50];
var res = linearSearch(arr,35);
console.log(res);






/* 10  k false
   20  k false
   30  k false
   40  k true*/