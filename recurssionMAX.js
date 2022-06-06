// given array return mAX element by Recurrsion
// arr = [10,20,-30,-40,-50]

function maxRec(arr,i,maxSoFar){
    if(i===arr.length){
        return maxSoFar; //base element
    }
   if( arr[i]>maxSoFar){
       maxSoFar=arr[i];
   }
   return maxRec(arr,i+1,maxSoFar);
}
   var res = maxRec([10,20,-30,-40,-50],0,Number.MIN_SAFE_INTEGER);
   console.log(res);
   var res = maxRec([111111,20,-30,-40,-50],0,Number.MIN_SAFE_INTEGER);
   console.log(res);


