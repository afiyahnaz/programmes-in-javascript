// // given an sorted arr find an binary search return true or false;
// // arr=[10,20,30,40,50]
// // k=35, low=0, high=4
// function binSearch(arr,k){
//     var low=0,high=arr.length-1;
 
//     while(low<=high){
//         var mid =parseInt((low+high)/2);

//     if(arr[mid]===k)
//     return true;
//     if(arr[mid]>k){
//         high=mid-1;
//     }
//     else{
//         low=mid+1;
//     }
// }
//     return false;

// }
// var res= binSearch([10,20,30,40,50],40);
// console.log(res);


//........................../bineary search..............................

function binSearch(arr,k){
    let low = 0; high = arr.length-1;
    while(low<=high){
        let mid =parseInt ((low+high)/2);
        if(arr[mid]===k) return mid;
        if(arr[mid]<k) low=mid+1;
        else high = mid-1;
    }
    return -1;
}
// console.log(binSearch([10,20,30,40,50],60));
// console.log(binSearch([10,20,30,40,50],30));
// console.log(binSearch([10,20,30,40,50],20));
// console.log(binSearch([10,20,30,40,50],80));


//...................bineary search with reccursion..................

function binSearch(arr,k,low,high){
    if(low>high) return -1;
    let mid = parseInt((low+high)/2);
    if(arr[mid]===k) return mid;
    if(arr[mid]<k) return binSearch(arr,k,mid+1,high);
    return binSearch(arr,k,low,mid-1);
}
console.log(binSearch([10,30,50,89,45,75,65],75,0,6));