//...short hand property notation.....//

    
   const  width = 5;
   const   height = 7;
   const  color = "red";

    const mobile = {// if key and value are same no need to repeat them
        width,  // no need on wtiting width=width
        height,//just write width, it will assign 
        color,
       };


console.log(mobile);

// ...............object destructuring..............
var m1 = {
    scale : 5,
    radius :7,
    meter: "blue"
};
 var scale = m1.scale;
 var radius = m1.radius;
 var meter = m1.meter;

// ...........object destructuring  insitilazation............
var {scale,radius,meter} = m1;
var {scale,meter} = m1;
 console.log(scale,meter);
 console.log(m1);

// ....................array destructuring............//
const arr = [10,20,30,40];

const [afi,naz] = arr;

console.log(afi,naz);

//................... cloning (spread operator).....................

var m1 = {
    width : 4,
    height : 10,
    color : "red",

};
console.log(m1); // printing m1
var m2 = {...m1};// assigning m1 to m2 with .(dot) operator
var m2 = {...m1, color:"pink"}; // we can change according to our requiremeent
console.log(m2);

//.............. shallow cloning...................
var n1 = {
    kilometer : 2,
    miles : 5,
    angle : 10,
    name : "naz",
    features :{
        weight : 50,
        long : 20,
        fair :3,
    }
}
 var n2 = {...n1};
 console.log(n1.features ===n2.features ); //shallow clonoing........
 console.log(n2);



















