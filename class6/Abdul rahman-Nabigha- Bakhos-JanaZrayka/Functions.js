//1
function divisible(x){
  if(x%5==0)
  return true;
  return false;
}
console.log(divisible(37));
console.log(divisible(55));

//2

function lessThan(x,y){
 let s= x+y;
  if(s<100)
  return true;
  return false;
}
console.log(lessThan(22,15));
console.log(lessThan(83,34));

//3

function fullName(fn,ln){
  let fullN = fn.concat(ln) ;
  return 'Hello' +" "+ (fullN);
}
console.log(fullName('Nabigha ' ,'Mogharbel'));

//4
 let u0=0;
 let u1=1;
 let fs=0 , cpt;
  while( fs<4000000){ 
  cpt=u0+u1;
  u0=u1;
  u1=cpt;
 console.log(cpt);
  if( u1 %2==0 ){
    fs+= u1;
  }
  }
console.log(fs);

//5

function maxInteger(a){
let max = 0;
for (i=0; i<a.length ; i++){
if(a[i]>=max){
  max=a[i];
}
}
return max;
}
console.log(maxInteger([4,3,1,2]));
console.log(maxInteger([300, 200, 600, 150]));
  
