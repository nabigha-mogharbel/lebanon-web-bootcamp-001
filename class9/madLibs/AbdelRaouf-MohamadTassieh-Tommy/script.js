
document.getElementById("lib-button").addEventListener("click",writeStory);



function writeStory()
{
let a=document.getElementById("noun").value;
let b=document.getElementById("adjective").value;
let c=document.getElementById("person").value;
 
 document.getElementById("story").innerText=`${a} really likes ${b} ${c}`;  

return
}
