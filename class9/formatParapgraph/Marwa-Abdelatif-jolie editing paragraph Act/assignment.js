/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const text = document.querySelector('p');
text.innerHTML = text.innerText.split(' ').map(word => word.length > 8 ? `<mark> ${word}</mark>`:word).join(' ');
/*
  Exercise 02
  -----------
  Add a link back to the source of the text (Source: https://forcemipsum.com/) after the paragraph tag.
*/

const link = document.createElement('a');
link.href = 'https://forceipsum.com/';
link.innerText = 'https://forcemipsum.com/';
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

text.innerHTML = text.innerHTML.split(/\.[^\.|<]/).join('.</p><p>')+'</p>';

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/ 

const count = text.innerText.split(' ').length;
const elemt = document.createElement('div');
elemt.innerText = `${count} words`
document.body.insertBefore(elemt,text);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

text.innerHTML = text.innerHTML.replaceAll("?","🤔");
text.innerHTML = text.innerHTML.replaceAll("!","😲");