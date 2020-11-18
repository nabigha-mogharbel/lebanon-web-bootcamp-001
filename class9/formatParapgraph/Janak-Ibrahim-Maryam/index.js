

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
let p = document.querySelector("p").innerText;
let res = p.split(" ");
p="";
for(let i =0; i<res.length;i++){
  if (res[i].length>=8){
    p+="<span>"+res[i]+" </span>";
  }
  else{
    p+=res[i] +" ";
  }  
}
document.querySelector("p").innerHTML=p;

let listHighlighter=document.querySelectorAll("span");
for (i=0;i<=listHighlighter.length-1;i++){
  listHighlighter[i].style="background-color: yellow;";
}


/*
  Exercise 02
  -----------
  Add a link back to the source of the text (Source: https://forcemipsum.com/) after the paragraph tag.
*/
let a=document.createElement('a');
a.href="https://forcemipsum.com/"
a.innerText="forcemipsum";
document.body.appendChild(a);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
p = document.querySelector("p").innerHTML;
let res1 = p.split(".");
p="";

for(let i =0; i<res1.length;i++){
  if(res1[i].length==""){
     p+=""
    }
    else{
     p+=res1[i]+".<br>";
    }
  }
document.querySelector("p").innerHTML=p;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
let elementCount=res.length;
p= elementCount + " words. <br><br>"+ p;
document.querySelector("p").innerHTML=p;
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (??) and exclamation marks (!) with astonished faces (??) 
*/
p = document.querySelector("p").innerHTML;
let res2 = p.split("?");
p="";

for(let i =0; i<res2.length;i++){
  if(res2[i].length==""){
     p+=""
    }
    else{
     p+=res2[i]+"&#129300";
    }
  }
document.querySelector("p").innerHTML=p;



p = document.querySelector("p").innerHTML;
let res3 = p.split("!");
p="";

for(let i =0; i<res3.length;i++){
  if(res3[i].length==""){
     p+=""
    }
    else{
     p+=res3[i]+"&#128558";
    }
  }
document.querySelector("p").innerHTML=p;



// &#129300;

// &#128558;