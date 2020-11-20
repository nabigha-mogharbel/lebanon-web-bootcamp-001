//Question #1
const addUp = n =>{  
let sum=0;

for(let i = 1 ; i<=n ; i++ ){
  sum+=i;
}
return sum;
}

//Question #2
const doubleChar = string => {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString+= `${string[i]}${string[i]}`;
  }
  return newString;
}