// given an sorted arr find an binary search return true or false;
// arr=[10,20,30,40,50]
// k=35, low=0, high=4
function binSearch(arr,k){
    var low=0,high=arr.length-1;
 
    while(low<=high){
        var mid =parseInt((low+high)/2);

    if(arr[mid]===k)
    return true;
    if(arr[mid]>k){
        high=mid-1;
    }
    else{
        low=mid+1;
    }
}
    return false;

}
var res= binSearch([10,20,30,40,50],40);
console.log(res);