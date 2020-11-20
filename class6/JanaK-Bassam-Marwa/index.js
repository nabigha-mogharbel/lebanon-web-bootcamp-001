// ex 1:
//----------
 /* let x=17;
divideByFive(x);

function divideByFive (x){
 if(x%5==0){
   console.log("True");
 }

else{
   console.log("False");
}
return 0
} */

//----------
//----------
//ex 2:
//----------
/*
let a= 22;
let b=80;
lessThan100(a,b);

function lessThan100(x,y) {
  if(x+y<=100){
    console.log("TRUE");

  }

  else{
    console.log("FALSE");
  }
}*/

//----------
//----------
//ex 3:
//----------
/*let firstName="Bassam";
let lastName="Edelbi";
greeting(firstName,lastName);

function greeting(x,y){
  
  let z= x + " " + y;
  console.log("hello " + z)
}*/

//----------
//----------
//optional:
//----------
// let sum =2;
// Fibonacci(1,2);
// console.log("sum="+sum);
// function Fibonacci (x,y){
//   let z=x+y;
//   if(z<4000000){
//     if(z%2===0 )
//     {
//       sum=sum+z;
//     }
//      Fibonacci(y,z);
//   }
// }

//----------
//----------
//ex 4:
//----------
let x=[300, 200, 600, 150];
max=0;
for (i=0;i<4;i++){
  if (max<x[i]){
     max=x[i];
  }
}
console.log(max);
