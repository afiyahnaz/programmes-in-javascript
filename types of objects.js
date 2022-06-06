// in objects there are many forms
// intilization of object


var student={
    name:"hdgd",
    age:12,
    branch:"Eee",
    fee:254,

    payFee:function(amount){
        console.log("feepaid",amount)
    }
}
console.log(student);
student.payFee();
for(var key in student){
    console.log(key, student[key]);
}
// function in object:
// if we declare call function outside the function then its called function in Object.

 var names=[contact1,contact2,contact3];
 var contact1={
   FirstName:"ftr",
   LastName:"naz",
   Email1:[{
       personal:"1jhh@gmail.com",
       type:true,
   },
  {
    office:"4587@gff.com",
    type:false,

   }],
      PhNumber :{
       personal:1245,
       type:true,
   },
   address:[{
       hNo:124,
       Street:"hhgg",
       City:"hyd",
       PinCode:124,
   },
  {
    hNo:124,
    Street:"hhgg",
    City:"hyd",
    PinCode:124,
   }],
};
   var contact2={
    FirstName:"ftr",
    LastName:"naz",
    Email1:[{
        personal:"1jhh@gmail.com",
        type:true,
    },
   {
     office:"4587@gff.com",
     type:false,
 
    }],
       PhNumber :{
        personal:1245,
        type:true,
    },
    address:[{
        hNo:124,
        Street:"hhgg",
        City:"hyd",
        PinCode:124,
    },
   {
     hNo:124,
     Street:"hhgg",
     City:"hyd",
     PinCode:124,
    }],
};
var contact3={
    FirstName:"ftr",
    LastName:"naz",
    Email1:[{
        personal:"1jhh@gmail.com",
        type:true,
    },
   {
     office:"4587@gff.com",
     type:false,
 
    }],
       PhNumber :{
        personal:1245,
        type:true,
    },
    address:[{
        hNo:124,
        Street:"hhgg",
        City:"hyd",
        PinCode:124,
    },
   {
     hNo:124,
     Street:"hhgg",
     City:"hyd",
     PinCode:124,
    }],
}

 
var phoneBook=[contact1,contact2,contact3];
function findByCity(City){
    for(var i=0;i<phoneBook.length;i++){
       if(phoneBook[i].address.City===City){
           console.log(phoneBook[i].FirstName.phoneBook[i].lastname);
       }

        }

    }

findByCity('hyd');

// // objects in objects
var student = {
    id:1254,
    Name: "Naz",
    Class:12,
    branch:"eee",
    totalmarks:[{
        marks:456,
        percentage:54.0,
        aggregate:98,
    }],
};
    var student1 = {
        id:1254,
        Name: "Naz",
        Class:12,
        branch:"eee",
        totalmarks:[{
            marks:456,
            percentage:54.0,
            aggregate:98,
        }],
   
};
console.log(student.totalmarks.percentage);

// method in object
// if u write function in object that is called method
var mobile={
    width:1000,
    height:145,
    color:"red",
    call:function(mobileDetails){
        console.log("calling..." , mobileDetails);
    },
    call1:function(mobileDetails){
        console.log("is busy......." , mobileDetails);
    },
    call2:function(mobileDetails){
        console.log("kept your call on hold...." , mobileDetails);
    },
};
mobile.width=100000;
mobile.call();
mobile.call1();
mobile.call2();
console.log(mobile);
console.log(mobile.width);


// overwriting the values

var mobile1={
    width:1,
    height:4,
    color:"pink",
   call:function(number){
       console.log("calling....",number);
   }


};
mobile1.color="black";
console.log(mobile1);

// Reflection
var mobile2={
    width:12,
    height:32,
    color:"yellow",
    call:function(mobileDetails){
        console.log("calling......",mobileDetails);
    }
};
console.log(mobile2);
mobile2.call();
for(var key in mobile2){
    console.log(key,mobile2[key]);
}
// property-name;property-value
var mobile={
    width:12,
    height:45,
    color:"green",

call:function(mobileData){
    console.log("hello world.....",mobileData);
}
};
console.log(mobile);
mobile.height=100;
console.log(mobile);
for(var key in mobile){
    console.log(key,mobile[key]);
}
// finding if objects take similar memory or their are  in reference
var student1={
    name:"naz",
    age:12,
    branch:"eee",
    marks:457,
    aggregate:65,
    call1:function(gpa){
        console.log("pass....",gpa);
    }
};
var student2={
    name:"ngfre",
    age:12,
    branch:"ece",
    marks:125,
    aggregate:95,
    call2:function(gpa){
        console.log("distintion....",gpa);
    }
};
var student3={
    name:"nagfesddz",
    age:12,
    branch:"cse",
    marks:987,
    aggregate:45,
    call3:function(gpa){
        console.log("excellent....",gpa);
    }
};
student1.call1();
student2.call2();
student3.call3();
var student1=student2;
console.log(student1===student2);
var x=true;
var y=true;
console.log(x===y);

function fn(a,b){
    a.width=100;
    b.height=100000;

}
var x=10;   // value type
var y=20;    // value type

var o1={width:10, height: 20};
var o2={width: 10, height: 20};
fn(01,02);



