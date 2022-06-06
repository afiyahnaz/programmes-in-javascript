// ...........cloning...............
var total ={person1,person2};
var person1={
    firstname:"naz",
    secondName:"afi",
    phoneNo:{
        number:"+01-12-123-1234",
        type:"primary",
        active:"true",

    },
    phoneNo1:{
        number:"+01-12-123-22454",
        type:"primary",
        active:"true",

    },
    phoneNo2:{
        number:"+01-12-163-312434",
        type:"secondary",
        active:"true",

    },
    phoneNo3:{
        number:"+01-12-123-1234",
        type:"primary",
        active:"true",

    },
    phoneNo4:{
        number:"+01-12-123-1234",
        type:"primary",
        active:"true",

    },
     email:{
         personal:"asd@gmail.com",
         office:"dsgg@gmail.com",
         active:"true",
     },
    email1:{
        personal:"asd@gmail.com",
        office:"dsgg@gmail.com",
        active:"true",
    },
    email2:{
         personal:"asd@gmail.com",
         office:"fdgdsghsdh@gmail.com",
        active:"true",
        },
    email3:{
        personal:"asd@gmail.com",
        office:"dsgg@gmail.com",
        active:"true",
        },
     email4:{
         personal:"asd@gmail.com",
         office:"dsgg@gmail.com",
         active:"true",
    },
    adress:{
        hNo:"12-25",
        locality:"tolichoki",
        city:"hyderabad",
        pinCode:"500008",
    },
    adress1:{
            hNo:"12-25",
            locality:"tolichoki",
            city:"hyderabad",
            pinCode:"500008",
        },
        adress2:{
            hNo:"12-25",
            locality:"tolichoki",
            city:"hyderabad",
            pinCode:"500008",
        },
        adress3:{
            hNo:"12-25",
            locality:"tolichoki",
            city:"hyderabad",
            pinCode:"500008",
        },
        adress4:{
            hNo:"12-25",
            locality:"tolichoki",
            city:"hyderabad",
            pinCode:"500008",
        },
        call:function(address){
            console.log("calling......",address)
        },
    
        call:function(address){
            console.log("calling......",address)
        }

        };
        // console.log(person.  firstname);
        // console.log(person.secondName);
        // console.log(person. phoneNo3.type);
        var person2 = {...person1};
        console.log(person1.features ===person2.features ); //shallow clonoing........
        console.log(person2);
        //..................reflection................
        for(var key in person1){
            console.log(key,person1[key]);
        }
        
        for(var key in person2){
            console.log(key,person2[key]);
        }
       
        
       

