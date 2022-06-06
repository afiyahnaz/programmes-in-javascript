// function fn(){
//     console.log("naz");
// }
// fn();
// // addition of numbers
// function add(a,b){
//     c=a+b;
//     return c;

// }

// console.log(add(4,5));
// // sub with mul of numbers
// function sub(a,b,c,d){
//     e=((a-b)*(c-d));
//     return e;
// }
// console.log(sub(5,2,5,2));
// // div with mul of numbers
// function div(f,g,h,i,k){
//     k=((f/g)*(h/i))+k;
//     return k;

// }
// console.log(div(10,5,8,4,1))
// // mod with div of numbers
// function Mod(l,m,n,o,p){
//     q=((l%m)/(n%o))+p;
//     return q;
// }
// // console.log(Mod(8,4,9,7,1));
// // // add numbers
// // function add(r,s,t,u,v){
// // w=r+s+t+u+v;
// // return w;
// // }
// // console.log(add(10,10,10,10,10));
// // console.log(add(4,4,4,4,4));
// // console.log(add());
// // console.log(add(10,12,45,85,85,85,96));
// // console.log(add([1,2,3,4,4],[1,2,3,4,4]));
// // console.log(add(true,false));
// // console.log({},{});
// // // aggteate with forloop
// // var marks=[98,98,98,98,98,98]
// // var marksSecured=0;
// // var totalMarks=600;
// // for(i=0;i<marks.length;i++){
// //     marksSecured=marksSecured+marks[i];
// // }
// // var aggregate=(marksSecured/totalMarks)*100;
// // console.log(aggregate);
// // // aggreate of marks with while loop
// // var marks=[98,98,98,98,98,98]
// // var marksSecured=0;
// // var totalMarks=600;
// // i=0;
// // while(i<marks.length){
    
// //     marksSecured=marksSecured+marks[i];
// //     i++;
// // }
// // var aggreate=(marksSecured/totalMarks)*100;
// // console.log(aggreate);
// // aggreate with functions
// function calculateAggreate(marks){
//     var totalMarks=600;
//     var marksSecured=0;
  
//     for(var i=0;i<marks.length;i++){
//         marksSecured=marksSecured+marks[i];
//     }
//      var aggreate=(marksSecured/totalMarks)*100;
//      return aggreate;

// }
// calculateAggreate([98,98,98,98,98,98]);
// console.log(calculateAggreate[84,96,98,56,98,45]);
// console.log(calculateAggreate[58,69,98,98,85,98]);
// console.log(calculateAggreate[68,96,80,98,75,95]);
// console.log(calculateAggreate[57,87,57,65,84,65]);
// aggregate with functions
// function calculateAggregate(marks){
//     var totalMarks=600;
//     var marksSecured=0;
//     for(var i=0;i<marks.length;i++){
//         marksSecured=marksSecured+marks[i];
//     }
//     var aggregate=((marksSecured/totalMarks)*100);
//     return aggregate;

// }
// calculateAggregate([76,88,76,85,74,65]);

// calculateAggregate([54,85,74,65,95,57]);

// calculateAggregate([68,85,45,57,65,85]);

// calculateAggregate([58,85,89,57,65,85]);

    
// prime number by functions
// function isPrime(n){
//     var count=0;
//     for(i=1;i<=n;i++){
//         if(n%i===0){
//             ++count;
//         }
//     }
// if (count===2){
//     return true;

// }else{
//     return false;
// }
// }
// console.log(isPrime(10));
// console.log(isPrime(5));
// console.log(isPrime(9));
// console.log(isPrime(20));
// console.log(isPrime(11));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(0));
// // prime number with functions
// function isPrime(n){
//     var count=0;
//     for(i=1;i<=n;i++){
//         if(n%i===0){
//             ++count;
//         }
//     }
// return count===2;

// }


// console.log(isPrime(54));
// // prime number in functions
// function isPrime(n){
//      var count=0;
//     for(i=1;i<=n;i++){
//         if(n%i===0){
//             ++count;
//         }
//     }
// if(count===2){
//     return true;
// }
// return false;
// }
// console.log(isPrime(45));
// // prime numbers with functions
// function isPrime(n){
//     var count=0;
//     for(i=0;i<=n;i++){
//         if(n%i===0){
//             ++count;
//         }
//     }
//     if(count===2){
//         return true;
//     }
//     return false;


// }
// console.log(isPrime(5));
// isPrime by functions
function isPrime(n){
    var count = 1;
    var upper = Math.sqrt(n);
    for(i=1;i<=upper;i++){
        if(n%i===0);
        ++count;
    }
    return count===2;
}
console.log(isPrime(5));