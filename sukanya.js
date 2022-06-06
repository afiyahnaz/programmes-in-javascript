// calculate interest
/* slaps:
      0 - 1000 : 3 rs
      1001 - 10,000 :5 rs 
      10,000  -8 rs*/
/*
     100*(2/100)=200
     1000*(3/100)=300
     10,000*(5/100) =500
     100000*(8/100)=800    */
function calculateTotalAmount(cash){
    var oldAmount =0;
  
    if(cash>10000){
        var oldAmount = oldAmount+800;
        var newAmount  = oldAmount+ cash ;
        var cash = cash + newAmount;
     return cash;
    }
    if(cash>1000){
      
        var  oldAmount = oldAmount+500;
        var newAmount  = oldAmount+ cash ;
        cash = cash + newAmount;
        return cash;
       
    }
    if(cash>100){
        var oldAmount = oldAmount+200;
        var newAmount  = oldAmount+ cash ;
        cash = cash + newAmount;
        return cash;
    }
    
        var oldAmount = cash+10;
      
        cash = cash + oldAmount;
        return cash;
    
}
console.log(calculateTotalAmount(800));
















//         var chargeableUnits = units - 200;
//         var value = chargeableUnits*6;
//         var amount = amount + value;
//         units = units-chargeableUnits;
//     }
//     if(units>100){
//         var chargeableUnits = units - 100;
//         var value = chargeableUnits*4;
//         var amount = amount + value;
//         units = units-chargeableUnits; 
//     }
//     if(units>50){
//         var chargeableUnits = units - 50;
//         var value = chargeableUnits*2.5;
//         var amount = amount + value;
//         units = units-chargeableUnits; 
//     }
   
//         var value = units*1.5;
//         var amount = amount + value;
//      return amount;
// }
// console.log(calculateBill(800))