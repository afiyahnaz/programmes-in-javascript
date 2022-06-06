// strings
// 

// // var str3 = (str+str1);
// var str3 = str.concat(str1);
// console.log(str3);
// var str4 = ("25");
// var str5 = ("98");
// var str6 = str4.concat(str5);
// console.log(str6);
// console.log(str.length);--->gives length of string.
// console.log(str[5]);------->gives that particular string.
// console.log(str1.length);
// console.log(str1[5]);
// var res = str.replace('S','N');
// console.log(res);
// var str6 = ("i hate afi");
// var res = str6.replace("hate","love");
// console.log(res);
// var str =( "full Stack Academy");
// var i = str.indexOf("full");
// var i1 = str.indexOf("Stack");
// var i2 = str.indexOf("Academy");

// console.log(i,i1,i2);
var str = ("Full Full Stack Stack Academy Academy Hyderabad Hyderabad");
console.log(str.split(':'));
var i = str.indexOf("Full");
var i1 = str.indexOf("Academy");
var i2 = str.indexOf("Stack");
var i3 = str.indexOf("Hyderabad");
console.log(i,i1,i2,i3);
var j = str.lastIndexOf("Full");
var j1 = str.lastIndexOf("Academy");
var j2 = str.lastIndexOf("Stack");
var j3 = str.lastIndexOf("Hyderabad");
console.log(j,j1,j2,j3);
console.log(str.length);
console.log(str[5],str[8],str[16],str[20],str[30]);
console.log(str.replace("full","half"));
console.log(str.replace("Stack","half"));
console.log(str.replace("Academy","classes"));
var str15 =("naz afi iqbal shahin illa illa")
console.log(str15.replace("naz","sumaiah"));
console.log(str15[6]);
console.log(str15.length);
console.log(str15.indexOf("afi"));
console.log(str15.lastIndexOf("illa"));
console.log(str15.substring(2,15));
console.log(str15.split(' '));
var words = str15.split(' ');
console.log(words);
var str30 = "28:6:396";
var time = str30.split(":" );
console.log(time);
var dt = "10:20:30";
var time = dt.split(":");
console.log(time);
var str18 = "21:54:95";
console.log(str18.split(': '));
var str15 =("naz afi iqbal shahin illa illa")
console.log(str15.toLowerCase().indexOf("illa"));
console.log(str15.indexOf("illa"));
var str25 =("NAZ AFI ILLA TAJ FATHIMA");
console.log(str25.toUpperCase().indexOf("ILLA"));
console.log(str25.indexOf("ILLA"));
var str30=("naz,atr,aoiy,lu,25,ju,58");
console.log(str30.split(''));

var str40 = "naz afi";
console.log(str40.length);
console.log(str40[4]);
console.log(str40.replace ("afi","naz"));
console.log(str40.substring(2,4));
console.log(str40.split(""));
console.log(str40.split(" "));

var x ="";
var y = !!x;
console.log(y);
var names = ["john", "joseph" ,"abc"];
console.log(names.slice(0,1));
console.log(names.splice(0,1));
var names1 = ["bgfdesfh"];
console.log(names1.slice(0,1));
console.log(names1.splice(0,1));









