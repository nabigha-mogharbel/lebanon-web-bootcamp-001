//1
function secretNames(names){
  let secret="";
  for (let i=0;i<names.length;i++){    
    secret+=names[i].charAt(0);
  }
  return secret;
}
console.log(secretNames(["Adam", "Sarah", "Malcolm"]));

//2
function reverse(str){
  let final="";
  for(let i in str){
    if (str[i] == str[i].toUpperCase()) {
  final+=str[i].toLowerCase();
    } 
    if (str[i] == str[i].toLowerCase()){
  final+=str[i].toUpperCase();
    } 
  }
  return final;
  
}
console.log(reverse("Hello World"));

//3

function chatRoomStatus(users) {
  const len=users.length;
  if(len ==0){
    return "no one online";
  }
  if(len == 1){
    return `${useres[i]} online`;
  }
  
  if(len==2){
    return `${useres[0]} and ${users[1]} online `;
  }
  else{
    return `${users[0]} and  ${users[1]}  and ${len-2} are online`;
  }
}

console.log(chatRoomStatus(["user1", "user2", "user3"]));