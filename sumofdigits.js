// given number print of digits
// example :123 
// example:123 = 123%10=3
// 12%10=2
// 1%10=1
// 1+2+3

// function sumOfDigits(n){
    // var sum=0;
    // while( n>0 ){
        // var digits=n%10;
        //  sum=sum+digits;
        // n=parseInt(n/10);
    // }
    // return sum;
// }
// console.log(sumOfDigits(1231245));

// print sum of numbers from 10^(-9) to 10^(9)
function sumOfDigits(n){
    var sum=0;
      while(n<0  ) {
        var digits=(-(n%10));
        sum=(sum+digits);
        n=parseInt(n/10);
     }
    
    
    return sum;
}
console.log(sumOfDigits((-12451)));

   
      



