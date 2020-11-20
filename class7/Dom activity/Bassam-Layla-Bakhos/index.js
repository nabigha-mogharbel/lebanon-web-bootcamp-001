// step 1: change the text inside h1 into "Hello there!"
document.getElementById("heading").innerText="Hello there!";


// step 2: add the class "small-txt" to all h2 elements

let h2Elements = document.querySelectorAll('h2');
for (let i = 0; i < h2Elements.length; i++) {
  h2Elements[i].outerHTML = '<h4>' +  h2Elements[i].innerHTML + '</h4>';
}


// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
let d = document.querySelector("div.container");
d.innerHTML = '<input type="text" id="text"><input type="submit" value="Submit" id="myBtn">';


// step 4: change the style of the added text input to have 100% width;

document.querySelector("#text").style.width="100%";

// step 5: create an array with the team members names in it
let nameofus = ['Bakhos Rachwan',' Bassam Eldelbi',' Layla Hammoud'];


// step 6: append a footer element to the body with a signature that says "Implement with love by: " and put each item in the array in here separated by a comma
let footer = document.createElement("footer");
document.body.appendChild(footer);
let array = document.querySelector("footer")
array.innerHTML= 'Implemented with &#128150 by: '+ nameofus;
 
// adding names to textBox and press submit
document.querySelector("#myBtn").addEventListener("click", function(){
let x;
x= document.querySelector('#text').value;
nameofus.push(x);
array.innerHTML= 'Implemented with &#128150 by: '+ nameofus;
document.querySelector('#text').value=' ';
});
