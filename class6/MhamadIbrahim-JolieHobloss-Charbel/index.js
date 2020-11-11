// 5, 55, 37
const divisableBy5 = (number) => number % 5 === 0 ? true : false;

console.log(divisableBy5(5));
console.log(divisableBy5(55));
console.log(divisableBy5(37));


//Try your code with the following pairs of values: (22,15), (83,34)
const lessThan100 = (number1, number2) => number1 + number2 < 100 ? true : false;

console.log(lessThan100(22,15));
console.log(lessThan100(83,34));


//“Hello <full name>!” 
const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}`;
console.log(greeting("Mhamad", "Ibrahim"));
console.log(greeting("Charbel", "It"));
console.log(greeting("Jolie", "Hobloss"));


/* Try your code with the following arrays: 
[4, 5, 1, 3]
[300, 200, 600, 150]
[1000, 1001, 857, 1]
*/
const largestNumber = (arr) => {
  let largestNum = 0;
  for (let i=0; i<arr.length; i++){
    if(arr[i] > largestNum) {
      largestNum = arr[i]
    } 
  }
  return largestNum;
}

console.log(largestNumber([4, 5, 1, 3]));
console.log(largestNumber([300, 200, 600, 150]));
console.log(largestNumber([1000, 1001, 857, 1]));