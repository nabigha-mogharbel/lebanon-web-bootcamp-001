// step 1: change the text inside h1 into "Hello there!"
document.querySelector("h1").innerText="Hello there!";

// step 2: add the class "small-txt" to all h2 elements
let classH2=document.querySelectorAll("h2");
classH2[0].classList.add('small-txt');
classH2[1].classList.add('small-txt');

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let maincont=document.querySelector(".container");
let createForm=document.createElement('form');
let inputText=document.createElement('input');
let inputSubmit=document.createElement('input');
inputText.setAttribute("type", "text");
inputSubmit.setAttribute("type", "submit");
inputSubmit.value="add";
createForm.append(inputText);
createForm.append(inputSubmit);
maincont.append(createForm);

// step 4: change the style of the added text input to have 100% width;
inputText.style.width="100%";

// step 5: create an array with the team members names in it
let teamNames=["jolie","marwa","tommy","abdelatif"];

// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
document.write("Implement with love by: ",teamNames.join(','));  