//1st activity
function addUp(x){
let sum=0;
for(let i=0;i<=x;i++){
sum +=i;
}
return sum;
}
console.log(addUp(5));

//2nd activity
let a = prompt("enter a word");
function doubleChar(word){
  let w ="";
  for(let i=0;i<=word.length;i++){
    if(w.charAt(i)!=" ") 
      {   w = w.concat(word.charAt(i));
          w = w.concat(word.charAt(i));
      }
   }
   return w;
}
console.log(doubleChar(a));