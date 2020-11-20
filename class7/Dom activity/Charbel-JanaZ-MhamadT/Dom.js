// step 1: change the text inside h1 into "Hello there!"

document.querySelector('h1').innerText="Hello There!"

// step 2: add the class "small-txt" to all h2 elements
let newClass = document.querySelectorAll('h2');

  for(let i=0; i<newClass.length;i++)
    {newClass[i].setAttribute("class","small-txt");}

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let c = document.querySelector('div');
c.innerHTML = '<form><input type="text" placeholder="Name"><br><input type="submit" value="add"></form>';

// step 4: change the style of the added text input to have 100% width;
let neWidth=document.querySelector('input');
neWidth.style.width="100%";

// step 5: create an array with the team members names in it
const a = ["Charbel ", "JanaZrayka ", "MohamadTassieh "];


// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
let f= document.createElement('footer');
f.innerText= "Implement with love by: ";
for(let i=0 ; i<a.length;i++)

 {
  if (a[length-1]==i) f.innerText+='.';

  else f.innerText+= `${a[i]} `+ " , ";
 }
 
 document.body.appendChild(f);
