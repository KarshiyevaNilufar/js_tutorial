 f1=(a,b)=>{
  if(a>b){
      return a/b;
  }else{
      return a*b;
  }
}
f2=(a)=>{
var sum=0;
var orta;
for(i=0;i<a.length;i++){
    if(!isNaN(a[i])){
     sum+=parseInt(a[i])
    }else{
       return 0;
    }
}
orta=sum/a.length;
console.log(orta)
}
console.log(f2([1,6,'er']))

f3=(a)=>{
var myArr = String(a).split("").map((a)=>{
  return Number(a)
})
let isPalindrome = true;
  for(i=0;i<a.length/2;i++){
    if(myArr[i] !== myArr[myArr.length - i - 1]){
        isPalindrome = false; 
        break;
      }
  }
  return isPalindrome;
}
console.log(f3(1222))
f4=(a,b)=>{
    var c=[]
for(i=0;i<a.length;i++){
    if(a[i]==b){
        c[i]='_'
    }else{
        c[i]=a[i]
    }
}
console.log(c)
}



function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();




























































// var d = new Date();
// var weekday = new myArray(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];


// var h = d.getHours();
// var m = d.getMinutes();
// var ml = d.getSeconds();
// console.log(n,h,m,ml)

// alert(
//     `Today is: ${n} and Current Time is: ${h}:${m}:${ml}`

// )








// var uzs=prompt("Som'da pul miqdorini kiriting!")

// var yetish=uzs-500*9433.34-250*9433.34-120*10354.03;
// if(yetish>0){
// alert("Oq yo’l, Alisher!")
// }else{
// alert("Alisher, ozgina sabr qilish kerak bo’lar ekan")
// }


