/*Class Object
// Es6 */
// .............intilization of  class Objects:...........
class Mobile{
   width = 12;
    height =7;
    color = "black";

    call(){
        console.log("calling...");
    }

}
var M1= new Mobile();
var M2= new Mobile();
var M3= new Mobile();
var M4= new Mobile();
var M5= new Mobile();
var M6= new Mobile();

console.log(M1,M2,M3,M4,M5,M6);

// constructor in Class Objects
class Mobile1{
    constructor(wd,clr){
        //this.width is called instant variable
      this.width=wd;
      this.height=15;
      this.color=clr;
   
    
    }

    call(){
        console.log("calling...")
    }
}
var M1 = new Mobile1(12,"red");
var M2 = new Mobile1(14,"black");
var M3 = new Mobile1(16,"yellow");
var M4 = new Mobile1(18,"blue");
console.log(M1===M2);
console.log(M1,M2,M3,M4);
console.log(M1);

// ........Extend or inheritance method in class contructor...........
class AbstractMobile{
    constructor(){
        console.log("super constructor....");
    }
    msg(){
        console.log("message");
    }
}
class Mobile3 extends AbstractMobile{
    constructor(hgt,clr){
        super();
    this.width=100;
   this. height=hgt;
    this.color=clr;
    console.log("child constructor...")
}

    call(){
        console.log("calling....");
    }
    msg(){
        console.log("new message function");
    }

}
var M1 = new Mobile3(12,"red");
var M2 = new Mobile3(14,"black");
var M3 = new Mobile3(16,"green");
var M4 = new Mobile3(18,"pink");
console.log(M1===M2);
console.log(M1,M2,M3,M4);
M1.call();
M1.msg();


 