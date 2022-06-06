class AbstractMobiles{
    constructor(){
        console.log("super constructor...")
    }
    msg(){
        console.log("My message...")   //msg overridding
    }
}

class Mobile extends AbstractMobiles{
    constructor(wd,clr){
        super();
   this.width=wd;
   this.height=50;
   this.color=clr;
    }
    msg(){
        console.log("My new message...")
        super.msg();  //message over ridding
    }
    // toString(){
    //     console.log(this);
    // }

    call(){
        console.log("calling...")
    }
}
var M1 = new Mobile(10,"red");
var M2 = new Mobile(12,"black");
var M3 = new Mobile(14,"yellow");
var M4 = new Mobile(16,"green");
console.log(M1,M2,M3);
console.log(M1===M2);
M1.call();
M1.msg();
M1.toString();