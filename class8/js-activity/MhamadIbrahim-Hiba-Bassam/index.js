//challenge 1
const answer = ['Mhamad', 'Hiba', 'Bassam'];
const newArray = answer.map( el => el.charAt(0));
newArray.sort();

console.log(newArray);

//challenge 2
let reversedString = ""
const reverseCase = string => {
  for (let i=0; i<string.length; i++) {
    if(string[i] === string[i].toLowerCase()){
      reversedString += string[i].toUpperCase();
    }
    else{
      reversedString += string[i].toLowerCase();
    }
  }
  return reversedString;
}

console.log(reverseCase("MANY THANKS"));


//challenge 3
const chatroomStatus = array => {
    let newArray = []
    let message = ""
    switch(array.length){
      case 0 : 
      message = "no one online";
      break;

      case 1:
      newArray = [...array, " online"]; 
      message = newArray.join("");
      break;

      case 2:
      newArray = [...array.splice(0,1), " and ", ...array.splice(0,1), " are online"];
      message = newArray.join("");
      break;
        
      default:
      newArray = [...array.splice(0,1), ", ", ...array.splice(0,1), ' and ', array.length ," more online"];
      message = newArray.join("");
    }
    return message;
}

console.log(chatroomStatus([]))
console.log(chatroomStatus(["Liz"]))
console.log(chatroomStatus(["Liz", "Ammar"]))
console.log(chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]))