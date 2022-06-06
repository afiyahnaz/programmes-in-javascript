//incometax calculation
function calculateIncomeTax(salary){
    var amount = 0;
    if(salary>1000000){
    var calculationSalary = (salary-1000000);
        var incomeTax = calculationSalary*(30/100);
        amount = amount +incomeTax;
        salary = salary-calculationSalary;
        console.log(incomeTax);
    } 
    

      if(salary>500000){
        var calculationSalary = (salary-500000);
            var incomeTax = calculationSalary*(20/100);
            amount = amount +incomeTax;
            salary = salary-calculationSalary;
            console.log(incomeTax);
        }
       
      
       
        if(salary>250000){
            var calculationSalary = (salary-250000);
                var incomeTax = calculationSalary*(5/100);
                amount = amount +incomeTax;
                salary = salary-calculationSalary;
                console.log(incomeTax);
            }
         

           var value = salary*(4/100);
           amount = amount+value;
           return amount;
           
}
var res = calculateIncomeTax(1100000);
console.log(res);