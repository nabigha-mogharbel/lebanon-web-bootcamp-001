function addUp(n){
let x=0;
for(let i = 1 ; i<=n ; i++ ){
  x+=i;
}
return x;
}

console.log(addUp(30));


function doubleChar(x){
  let i=0;
  let result="";
  while (i<x.length) { 
    result+=x.charAt(i)+x.charAt(i);
    i++;
  }
return result;
}
console.log(doubleChar("hello !"));
