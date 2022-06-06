// given arry find max element
// // arr =[20,8,5,10,-1,-6,10]
// mim=20;
function findMax(arr){
     var maxSoFar=Number.MIN_SAFE_INTEGER;
     for(i=0;i<arr.length;i++){
        if( arr[i]>maxSoFar){
            maxSoFar=arr[i];
        }
     }
     return maxSoFar;
    }

    console.log(findMax([20,8,5,10,-1,-6,10]));
    console.log(findMax([1000,8,5,10000,-1,-6,10]));
    console.log(findMax([500,8,5,10,-1,-6,10]));
