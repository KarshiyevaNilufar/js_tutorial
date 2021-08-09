var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];


var h = d.getHours();
var m = d.getMinutes();
var ml = d.getSeconds();
console.log(n,h,m,ml)

alert(
    `Today is: ${n} and Current Time is: ${h}:${m}:${ml}`

)








// var uzs=prompt("Som'da pul miqdorini kiriting!")

// var yetish=uzs-500*9433.34-250*9433.34-120*10354.03;
// if(yetish>0){
// alert("Oq yo’l, Alisher!")
// }else{
// alert("Alisher, ozgina sabr qilish kerak bo’lar ekan")
// }


