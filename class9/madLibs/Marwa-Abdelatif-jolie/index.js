const el = document.getElementById("lib-button");
let msg = "";

el.addEventListener("click", function (e) {
let noun=document.getElementById("noun").value; 
let adj=document.getElementById("adjective").value; 
let person=document.getElementById("person").value; 

msg = person+" really likes "+ adj+" "+ noun +".";

let story = document.getElementById("story");
story.innerText= msg;

});