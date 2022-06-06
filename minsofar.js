// given an arry return minium element
// arr =[20,8,5,10,-1,-6,10]
// mim=-6;

function findMin(arr) {
    var minSoFar = Number.MAX_SAFE_INTEGER;
    // index range of element
    for(var i=0;i<arr.length;i++){
        if(arr[i]<minSoFar){
            minSoFar = arr[i];
        }
    }
    return minSoFar;

}
console.log(findMin([20,8,5,10,-1,-6,10]));
console.log(findMin([20,8,5,-10,-1,-6,10]));
console.log(findMin([20,8,5,10,-20,-20,-6,10]));