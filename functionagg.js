function calculateAggregate(marks){
    var totalMarks =600;
    var marksSecured =0;
    for(var i=0;i<marks.length;i++){
        marksSecured=marksSecured+marks[i];
    }
var aggregate=((marksSecured/totalMarks)*100);
return aggregate;
}
console.log(calculateAggregate[98,98,98,98,98,98]);
console.log(calculateAggregate[47,84,75,98,58,57]);
console.log(calculateAggregate[85,47,87,47,87,57]);
console.log(calculateAggregate[69,78,67,57,65,57]);
