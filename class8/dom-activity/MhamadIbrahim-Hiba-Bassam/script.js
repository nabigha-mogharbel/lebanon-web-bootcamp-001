// Instructions 
let checkbox = document.querySelectorAll(".shopping-item");
let checkAll = document.getElementById("check-all");
let unchecked = document.getElementById("uncheck-all");
let log = document.getElementById("log");
let checkboxArray = Array.from(checkbox);
const listItems = [];

//1- Implement the Check all button functionality, when clicked all check boxes should become checked
const checkFunc = () => {
  for(let check of checkboxArray){
    if(!check.checked){
      check.checked = true;
    }
    else return;
  }
}

checkAll.addEventListener("click", checkFunc);

//2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked
const uncheckFunc = () => {
    for(let check of checkboxArray){
    if(check.checked){
      check.checked = false;
    }
    else return;
  }
}

unchecked.addEventListener("click", uncheckFunc);

//3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
let ul = document.createElement("ul");
log.appendChild(ul);

const addToList = (e) => {
  if(e.target.checked){
        console.log(e.target.value);
        listItems.push(e.target.value)
        console.log(listItems)
        let li = document.createElement("li");
        for(item of listItems) {   
            li.innerText = `bought ${item}`;
            ul.appendChild(li);
        }
    }
  else {
      console.log('unchecked');   
  } 
}

for(let check of checkboxArray){
  check.addEventListener("change", addToList)
}