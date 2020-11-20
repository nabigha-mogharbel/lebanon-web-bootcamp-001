//F1:
/*Write a function that takes a number and returns the sum of numbers leading up to that number
addUp(5) -> 15 // 1+2+3+4+5
addUp(30) -> 465*/

function addUp(x) {
    let sum=0;
   for (i=1;i<=x;i++) {
   sum+=i ; }
   return sum;
 }
 //console.log (addUp(30)); 
 
 
 
 //F2;
 /*Create a function that takes a string and returns a string in which each character is repeated once.
 doubleChar("Hi") -> "HHii"
 doubleChar("Hello World!") -> "HHeelllloo WWoorrlldd!!"*/
 const doubleChar=string =>
  {
   let messages = '';
   for (let i=0;i<string.length;i++) {
     messages+=`${string[i]}${string[i]}`;
     }
     return messages;
   }
 
 console.log (doubleChar("hello"));