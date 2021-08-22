function sum3(a,target){
for(i=1;i<a.length;++i){
 if(a[i]<target && a[i]>a[0]){
     a[0]=a[i]
 }
}
return a[0]
}

console.log(sum3([-6,14,-78,145],146))