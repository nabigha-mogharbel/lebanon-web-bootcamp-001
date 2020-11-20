/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked
*/
  list=[]
  log=document.getElementById("log");
 shoppingList= document.getElementsByName("shoppingList[]");

document.getElementById("check-all").addEventListener("click", function(){
  log.innerHTML="";
 for (i = 0; i < shoppingList.length; i++) {
  shoppingList[i].checked=true;
  list.push(shoppingList[i].value);
  log.innerHTML +="<li>"+list[i]+"</li>";
}

 });

 /*
2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked*/
 document.getElementById("uncheck-all").addEventListener("click", function(){
 for (i = 0; i < shoppingList.length; i++) {
  shoppingList[i].checked=false;
 }
 log.innerHTML=""
 });

/*
3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/

 for (i = 0; i < shoppingList.length; i++) {

  shoppingList[i].addEventListener("change", function(e){

    log.innerHTML="";
    if(e.target.checked){
      list.push(shoppingList[i].value);
    }
    else{
      list.pop(i);
    }


  log.innerHTML +="<li>"+list[i]+"</li>";
 });

 }
 
 
 