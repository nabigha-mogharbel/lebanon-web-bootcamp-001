

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

let paragraph1 = document.querySelector("p")
let paragraphToArray = paragraph1.innerText.split(" ")

let paragraphBackToString = paragraphToArray.map( element => element.length >= 8 ? `<mark>${element}</mark>`: element).join(" ")

paragraph1.innerHTML = paragraphBackToString

/*
  Exercise 02
  -----------
  Add a link back to the source of the text (Source: https://forcemipsum.com/) after the paragraph tag.
*/
document.querySelector("body").innerHTML+='<a href="https://forcemipsum.com/">Source: https://forcemipsum.com/</a>';

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const paragraph = document.querySelector("p");
const sentence = paragraph.innerHTML.split('.').join('<br>');

let newParagraph = "";
for(let i = 0; i < sentence.length; i++){
  
   newParagraph += sentence[i];


}
paragraph.innerHTML = newParagraph;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


console.log(cnt())
function cnt() {
  var paragraphs = document.getElementsByTagName("p"); ///use querySelector
  var count = 0;
  for (var i = 0; i < paragraphs.length; i++) {
    if ((paragraphs[i].innerHTML.split(' ').length) >= 8)
      count += paragraphs[i].innerHTML.split(' ').length;
  }
  return count  
}

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
let emo = document.querySelector('p');
emo.innerHTML = emo.innerHTML.replaceAll("?","🤔");
emo.innerHTML = emo.innerHTML.replaceAll("!","😲");