//challenge 1:
function secretSociety(array){
  array.sort();
  let result='';
  for(let i=0;i<array.length;i++){
    result+= array[i].charAt(0);
  }
  return result;
}

let arr=["Adam", "Sarah", "Malcolm"];
console.log(secretSociety(arr));


//challenge 2:
function chatroomStatus(array){
  if(array.length==0){
    return "no one online"
  }
  else if (array.length>2){
    return `${array[0]}, ${array[1]} and ${array.length-2} online`
  }
  else if(array.length==1){
    return `${array[0]} online`
  }
  else if(array.length==2){
     return `${array[0]} and ${array[1]} online`
  }
}

let arr1=["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"];
console.log(chatroomStatus(arr1));


//challenge3:
function reverseCase(string){
  let result='';
  for(let i=0;i<string.length;i++){
    if(string.charAt(i)===string.charAt(i).toLowerCase()){
       result+=string.charAt(i).toUpperCase();
        }
      else{
       result+=string.charAt(i).toLowerCase();
      }
  }
  return result;
}
console.log(reverseCase("Happy Birthday"));