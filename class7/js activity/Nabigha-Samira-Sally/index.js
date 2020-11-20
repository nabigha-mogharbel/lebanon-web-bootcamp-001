function doubleChar(text){
 let message="";
 for (let i=0;i<text.length; i++){
    let letter=text.charAt(i);
    message+=letter+letter;
    }
 console.log(message);
}
doubleChar("hello");



function addUp(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;}
addUp(5);