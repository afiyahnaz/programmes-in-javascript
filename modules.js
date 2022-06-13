const PI = 3.14;
const e = 2.7;

const mobile = {
    color : 'black',
    name : "naz",
};

function fn(){
    console.log('fn()');
};

var output = {
    PI:PI,
    e : e,
    mobile : mobile,
    fn : fn
};
module.exports = output;