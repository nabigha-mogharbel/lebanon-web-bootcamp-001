/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked

2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/

document.getElementById('check-all').addEventListener("click",check);
document.getElementById('uncheck-all').addEventListener("click",uncheck);
 const items = document.querySelectorAll('input');
 for(let i=0; i<items.length;i++){
      items[i].addEventListener('click',checklog);
 }

function check(){
  const items = document.querySelectorAll('input');
  for(let i=0; i<items.length;i++){
      items[i].checked = true;
  }
}

function uncheck(){
  const items = document.querySelectorAll('input');
  for(let i=0; i<items.length;i++){
      items[i].checked = false;
  }
}

function checklog(){
  const items = document.querySelectorAll('input');
  document.getElementById('log').innerHTML ='';
  for(let i=0; i<items.length;i++){
      if(items[i].checked === true){
           document.getElementById('log').innerHTML += "<ul><li>Bought "+ items[i].value +"</li></ul>"
      }
  }
}