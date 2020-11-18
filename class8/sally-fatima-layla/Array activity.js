//.....first exercise.....//

/*function societyName(arr){
  arr.sort()
  for(let i=0;i<arr.length;i++){

    name += arr[i].charAt(0);
  }
  return name
}

let name=""
let arr=["sally"," ","fatima"]
name=""
societyName(arr)
console.log(name)*/

function societyName(arr){
sname=[]
  for(let i=0;i<arr.length;i++){
    sname.push(arr[i].toUpperCase().charAt(0)) ;
  }

  return sname.sort().join("");
   
}
let arr=["sally","Lama","fatima"]
name=societyName(arr)
console.log(name)


// after the class, try to implement different versions and we will give you feedback

//.....second exercise.....//

/*swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, 
        function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('AaBbc'));*/


let str1=""
function convert(str){
  for(let i=0;i<str.length;i++){
     let character = str[i];
    if (character== character.toLowerCase()) {   
            str1+= character.toUpperCase()
        }  
        else {
         str1= str1 + character.toLowerCase()
        }
        
} return str1

}

convert("AAAa")
console.log (str1)
 

//.....third exercise.....//
function online(array){
  
  if (array.length==0) {
    console.log ('no one online')
  }
  if (array.length==1) {
    console.log (`${array[0]} is online`)
  }
   if (array.length==2) {
    console.log (`${array[0]} and ${array[1]} are online`)
    }
  if (array.length>2) {
let people= array.length - 2;
    console.log (`${array[0]}, ${array[1]} and ${people} more are online`)
}
}
  let arra=["sally","fatima","layla", "sara"]
  online(arra)


