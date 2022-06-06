// algorithm for binarysearch
// arr=[10,20,30,40,50]
// low=mid+1; high=mid-1;
function binSearch(arr,k){
    var low = 0, high = arr.length-1;
    // var mid = parseInt((low+high)/2);
    while(low<=high    ){
        var mid = parseInt((low+high)/2);
        //  console.log(mid,"mid");

            if (arr[mid]===k) return true;
            if(arr[mid]>k){
                // left
                high = mid-1;
            }
            else{
                // right
                low=mid+1;
            }
        }
    return false;
}
console.log(binSearch([50],50));
console.log(binSearch([50,10,20,80,90],50));
console.log(binSearch([50,698,789,564],50));
console.log(binSearch([50,258,478,3698],50));
console.log(binSearch([0],));