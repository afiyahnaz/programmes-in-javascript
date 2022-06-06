// calculating factors!
function factor(n){
    var arr = [];
    for(var i =1; i<=n;i++){
        if(n%i===0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(factor(100));
// calculate factors...!
