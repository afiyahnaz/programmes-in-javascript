// given an array return min element by Recurrion
// arr=[20,8,5,10,-1,-6,10]

function minRec(arr,i,minSoFar){
    if(i===arr.length){
        return minSoFar;  //base element
    }
    if(arr[i]<minSoFar){
        minSoFar=arr[i];
    }
    return minRec(arr,i+1, minSoFar);
}
   
var res=minRec([20,8,5,-1,-6,10],0,Number.MAX_SAFE_INTEGER);
console.log(res);
var res=minRec([20,80,-40,-50,-5874,10],0,Number.MAX_SAFE_INTEGER);
console.log(res);


