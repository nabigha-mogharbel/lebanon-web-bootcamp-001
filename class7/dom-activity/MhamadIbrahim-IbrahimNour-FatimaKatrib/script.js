// step 1: change the text inside h1 into "Hello there!"
let hello= document.querySelector('h1');
hello.innerText="Hello There!"

// step 2: add the class "small-txt" to all h2 elements
//let hh=document.getElementsByTagName('h2').classList.add('small-txt')
const h2 = document.querySelectorAll('h2')
const arr = Array.from(h2)
arr.forEach(el => el.classList.add('small-txt'))

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let sub = document.querySelector(".container");
sub.innerHTML="<form><input type='text' id='input' placeholder='Name' /><button id='add' >add</button></form>";

// step 4: change the style of the added text input to have 100% width;
document.querySelector('input').style.width = "100%"

// step 5: create an array with the team members names in it
const names = ['Mhamad Ibrahim', 'Fatima Katrib', 'Ibrahim Nour']

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
const footer = document.createElement('footer')
footer.innerText = `Implement with ❤ by: ${[...names]}`
document.body.appendChild(footer)
//Bonus Challenge: Bring the form to life by by adding functionality to add more names dynamically using the created form, you can add more team members by writing their name and clicking add (it should update the footer)
document.getElementById("add").addEventListener("click",myfunction)

function myfunction(e){
const inputValue = document.getElementById('input').value;
names.push(inputValue)
footer.innerText = `Implement with ❤ by: ${[...names]}`
  e.preventDefault()
};
