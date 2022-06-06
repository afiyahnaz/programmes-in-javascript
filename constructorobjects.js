/*objects 4 type
1.objects instilzation-camel casing
2.contructor in object-pascal cassing
3.class in object-pascal casing
4.creat.object-camel cassing

 constructor in objects:when ever we want similar data we use constructors...............
 constructor is present templates...............
 templates are used to reduce duplication...........
 constructor is denoted with "This".............*/

// constructot Instilization:
// pascal casing
function places(screen,look){
    this.location=screen;
    this.height=125; //8 bytes
    this.width=124;  //8 bytes
    this.scenery=look;  //8 bytes

    this.call=function(){
        console.log("amazing")  //8 bytes
    }

}
var p1 = new places("up","amazing");  //32 bytes
var p2 = new places("down","awesome");  //32 bytes
var p3 = new places("left","good");     //32 bytes
var p4 = new places("right","beautiful");   //32 bytes
console.log(p1===p2);
console.log(p1,p2,p3,p4);
console.log((p1.call===p2.call));

// function with prototype
// prototye used to save memory
function Mobile(clr){
    this.width=12;  //8 bytes
    this.height=24; //8 bytes
    this.color=clr;  //8 bytes

    Mobile.prototype.PI =3.14;


    Mobile.prototype.call=function(){    //8 bytes
        console.log("calling...",this.width,this.height)
    }

}
var M1 = new Mobile("red");    //24 bytes
var M2 = new Mobile("black");   //24 bytes 
var M3 = new Mobile("green");   //32 bytes
var M4 = new Mobile("yellow");    //24 bytes
var M5 = new Mobile("blue");   //24 bytes
console.log(M1,M2,M3,M4,M5)
console.log(M1===M3);
console.log(M1.call===M2.call);
M1.call();
M2.call();
M5["call"]();

console.log(M1.PI);



