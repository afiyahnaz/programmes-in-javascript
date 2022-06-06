var person = {
    fullName: "xyz",
    age: 30,
    hobbies:["coding","playing chess","gaming"],
    isMarried: true,

}
console.log(person.fullName);
console.log(person.age);
console.log(++person.age);
console.log(person.hobbies);
// bank account
var account ={
    accountNo :154874662111,
    ifsc:'SBN1548745',
    amount:5000,
    name:"dgteg",
}
// 




console.log(account.accountNo) ; 
console.log(account.ifsc);
console.log(account.amount);
// contact details
var contact={
    firstName: "naz",
    secondName:"afi",
    phoneNumber:{
        number:"+01-45-457-4789",
        type:"primary",
        active:"true",
    },
   
    email:["naz@gmail.com","afi@gmail.com","ccc@gmail.com","aaa@gmail.com"],
    adress:{
        dooNo:12/45,
        city:"AnalyserNode",
        zip:500008,
        locality:"tolichowki",
    }

    }

console.log(contact.firstName);
console.log(contact.secondName);
console.log(contact.email);
console.log(contact.adress.locality);




var studentDetails={
    name:"naz",
    age:30,
    branch:"CSE",
    Class:function(Dept){
        console.log("branch", Dept);

    }
};
var phoneContact={
    firstName:"naz",
    secondName:"afi",
    phoneNo:"+91-25-456-7895",
    Class1:function(details){
        ("phoneNo",details)
    }
};
console.log(phoneContact.Class1);

// calling function in objects
studentDetails={
    name:"asd",
    age:12,
    branch:"cse",
    gender:"female",
    Class2:function(sub){
      console.log ("branch",sub);

    },
}
    console.log(studentDetails.Class2);
    
// calling function by objects
 var orderFood={
    breakfast:["idly","dosa","puri","pongal","vada"],
    lunch:["rice","dal","pickle","curry","curd","lemon rice"],
    snacks:["cakes","samosa","bheel poori","tomato rice","ice-creams"],
    dinner:["chapati","pulka","paav bhaji","butter NaaN","biryani"],
    class4:function(items){
        console.log("dinner",items);
    },
}
console.log(orderFood.class4);
console.log(orderFood.dinner);
// object in objects
var bus={
    tirupati:["bus1","bus2","bus3"],
    madras:["bus5","bus8","bus11"],
    chennai:["bus12","bus15","bus19"],

}
console.log(bus.tirupati);
console.log(bus.madras);
console.log(bus.chennai);
var bus={
    tirupati:["bus1","bus2","bus3"],
    bangalore:["bus4","bus7"],
    mombay:["bus5"],
    Journey:function(trips){
        console.log("mombay",trips)
    }
};
console.log(bus.mombay);
console.log(bus.Journey);


// object in object
var beautifulplaces={
    kashmir:["ajg","hav","gf","hgf"],
    bangalore:["zoo","ooty","asd"],
    karnataka:{
        north:["gfd","hdgg","gfd","gfs"],
        south:["ljh","ase","lkj","hgf"],
        east:["hhg","hju","hyt","dse"],
        south:["hg","gff","hgf","ss"],
    },
    mombay:{
        north:["gfd","hdgg","gfd","gfs"],
        south:["ljh","ase","lkj","hgf"],
        east:["hhg","hju","hyt","dse"],
        south:["hg","gff","hgf","ss"],
    },
    madras:{
        north:["gfd","hdgg","gfd","gfs"],
        south:["ljh","ase","lkj","hgf"],
        east:["hhg","hju","hyt","dse"],
        south:["hg","gff","hgf","ss"],
    },
Unknowplaces:{
    place1:["gdgg","hgg","fsdr"],
    place2:["hhf","hg","hgf"],
    place3:["de","gff","hgg"],
}
    }
    console.log(beautifulplaces.kashmir);
    console.log(beautifulplaces.bangalore);
    console.log(beautifulplaces.karnataka.north);
    console.log(beautifulplaces.madras.north);
    console.log(beautifulplaces.mombay.south);
    console.log(beautifulplaces.Unknowplaces.place3);
    // methos in objects
    var something={
        together:"love",
        faraway:"more-love",
        separated:"respect",
        divorsed:"self-respect",
        call:function(anything){
            console.log("infinitelove....",
             anything);
        },
    };
    var something1={
        together:"love1",
        faraway:"more-love",
        separated:"respect",
        divorsed:"self-respect",
        call1:function(anything){
            console.log("infinitelove....",
             anything);
        },
    };
    var something2={
        together:"love2",
        faraway:"more-love",
        separated:"respect",
        divorsed:"self-respect",
        call2:function(anything){
            console.log("infinitelove....",
             anything);
        },
    };
    var something3={
        together:"love3",
        faraway:"more-love",
        separated:"respect",
        divorsed:"self-respect",
        call3:function(anything){
            console.log("infinitelove....",
             anything);
        },
    };
    var something4={
        together:"love4",
        faraway:"more-love",
        separated:"respect",
        divorsed:"self-respect",
        call4:function(anything){
            console.log("infinitelove....",
             anything);
        },
    };
    console.log(something.something4);
    // value types(number,boolean)
    // reference type(objects,arrays)
    var x = true;
    var y= false;
    console.log(x===y);
    var mx=m1;
    var m1=x;
    console.log(mx===m1);
    var s=88;
    var t=88;
    console.log(s===t);

    //..................object intilization...............
    let names = {
        firstName:"naz",
        secondName:"sumaiah",
        surName:"pulamathi",
        call8:function (adress){
            console.log("permanent adress",adress);
        }
    };
    names.firstName;
    names.surName;
    names.call8();
    console.log(names);
    //object intilizatio/////////////
    let names1 ={
        firstnames : "naz",
        secondName : "sumaiah",
        surName : "pulamathi",
        call10:function(details){
            console.log("permanent",details);
        }
    };
    console.log(names1.firstnames);
    names1.call10();

 




