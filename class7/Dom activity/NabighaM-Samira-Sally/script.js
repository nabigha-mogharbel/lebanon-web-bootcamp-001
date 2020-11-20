// step 1: change the text inside h1 into "Hello there!"
document.querySelector('h1').innerText="Hello There!"
// step 2: add the class "small-txt" to all h2 elements
document.querySelector('h2').classList.add('small-txt')
// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML

let container=document.querySelector('.container')
let form=document.createElement('form')
let input=document.createElement('input')
let button=document.createElement('button')
button.innerText="add"

form.appendChild(input)
form.appendChild(button)
container.appendChild(form)

// step 4: change the style of the added text input to have 100% width;
document.querySelector("input").style.width = "100%";

// step 5: create an array with the team members names in it
var names=["Nabigha","Samira","Sally"];


// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma

let Foto=document.createElement('footer');
let NaMeS=names.join(' ,');
let body=document.querySelector('body');
let hhyya=document.createElement('span');
hhyya.innerText="Implement with love by: "+" "+NaMeS
Foto.appendChild(hhyya)
body.appendChild(Foto) 
