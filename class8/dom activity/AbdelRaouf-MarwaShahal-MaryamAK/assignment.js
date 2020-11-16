/* Instructions */

//1- Implement the Check all button functionality, when clicked all check boxes should become checked

document.getElementById("check-all").addEventListener("click", check);
function check()
{var checking;
 checking = document.getElementsByClassName("shopping-item");
 for(let i=0 ; i<checking.length; i++)
 {
   checking[i].checked=true;
 }
}

// 2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked

document.getElementById("uncheck-all").addEventListener("click", uncheck);
function uncheck()
{var checking;
 checking = document.getElementsByClassName("shopping-item");
 for(let i=0 ; i<checking.length; i++)
 {
   checking[i].checked=false;
   list.splice(this.value);
 }
}
// 3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity

let shoppingList = document.getElementsByClassName('shopping-item');

for (let i=0; i<shoppingList.length; i++)
{
    shoppingList[i].onclick = doSomething;
}

let list=[];
function doSomething() 
{
   let x=list.indexOf(this.value);
    if ( this.checked ) 
    {
        // if checked ...
       list.push(this.value);
        console.log(list);
        (document.querySelector('#log').innerHTML ="<h6> BOUGHT: </h6>"+list);
    } else {
        // if not checked ...
        list.splice(x,1);
        console.log(list);
        (document.querySelector('#log').innerHTML ="<h6> BOUGHT: </h6>"+list);
    }
}