// /* slaps
// 0 - 50 : 1.5rs
// 51 - 100 : 2.5rs
// 101 - 200 :4rs
// >200 : 6rs  */
// /*
// units:
// 50*1.5 = 75
// 50*2.5 = 125
// 100*4 = 400
// 100*6 = 600   */
function calculateBill(units){
    var amount = 0;
    if(units>200){
        var chargeableUnits = units - 200;
        var value = chargeableUnits*6;
        var amount = amount + value;
        units = units-chargeableUnits;
        console.log(units);
    }
    if(units>100){
        var chargeableUnits = units - 100;
        var value = chargeableUnits*4;
        var amount = amount + value;
        units = units-chargeableUnits;
        console.log(units); 
    }
    if(units>50){
        var chargeableUnits = units - 50;
        var value = chargeableUnits*2.5;
        var amount = amount + value;
        units = units-chargeableUnits;
        console.log(units); 
    }
   
        var value = units*1.5;
        var amount = amount + value;
        return amount;
}
console.log(calculateBill(800));


// calculate electrical bill
/* slabs: 
1-50 :1.5 rps;
51-100:2.5 rps;
101-200-4 rps;
>201: 6rps
units:
50*1.5=75;
50*2.5=125;
100*4=400;
100*6=600;
           */

/*function calculateBill(units){
    var amount =0;
    if(units>200){
        var chargeableUnits = units-200;
        var value = chargeableUnits*6;
        var amount = amount + value;
        units = units-chargeableUnits;
    }
     if(units>100)   {
         var chargeableUnits=units-100;
         var value = chargeableUnits*4;
         var amount = amount+ value;
         units = units-chargeableUnits;
     }
     if(units>50)   {
        var chargeableUnits=units-100;
        var value = chargeableUnits*2.5;
        var amount = amount+ value;
        units = units-chargeableUnits;
    }
    var value = units*1.5;
    var amount = amount+ value;
    return amount;

}
 var res = calculateBill(500);
 console.log(res);*/
















