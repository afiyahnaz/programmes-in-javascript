var arr=[1,2,3,4];
var names=["abc","hgf"];
var contact1={
    firstName:"abc",
    lastName:"ndd",
    phoneNumber:[{
        number:"+1-25-568-8965",
        type:"primary",
    },
    {    number:"+1-25-568-8965",
    type:"primary",
}],
email:[{
    personal:"ase@gmail.com",
    office:"afr@gmail.com",
},
{
    personal:"ase@gmail.com",
    office:"afr@gmail.com",
}],
address:{
    hNo:"124",
    locality:"gdvee",
    city:"bangalore",
    zipcode:5471,
},
};
var contact2={
    firstName:"hgf",
    lastName:"jdhg",
    phoneNumber:[{
        number:"+1-25-568-8965",
        type:"primary",
    },
    {    number:"+1-25-568-8965",
    type:"primary",
}],
email:[{
    personal:"ase@gmail.com",
    office:"afr@gmail.com",
},
{
    personal:"ase@gmail.com",
    office:"afr@gmail.com",
}],
address:{
    hNo:"1242",
    locality:"lgdvee",
    city:"hyderabad",
    zipcode:5471,
},
};
var phoneBook=[contact1,contact2];
function findByCity(city){
    for (var i=0;i<phoneBook.length;i++){
        if(phoneBook[i].address.city===city){
            console.log(phoneBook[i].firstName,phoneBook[i].lastName);
        }
    }
    }
findByCity("hyderabad");



