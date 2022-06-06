// calculating aggregate by functions
function calculateAggregate(marks){
    var totalMarks = 600;
    var marksSecured = 0;
    for(i=0;i<marks.length;i++){
        marksSecured = marksSecured+marks[i];
    }
    var aggregate = ((marksSecured/totalMarks)*100)
    return aggregate;
}
 var res = calculateAggregate([98,98,98,98,98,98]);
console.log(res);
// calculate prime number
function isPrime(n){
    var count=0;
    for(i=1;i<=n;i++){
        if(n%i===0){
            ++count;
        }
    }
    if(count===2){
        return true;
    }
    return false;
}
console.log(isPrime(10));