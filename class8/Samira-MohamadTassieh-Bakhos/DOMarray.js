/* Instructions 

1- Implement the Check all button functionality, when clicked all check boxes should become checked*/
document.querySelector("#check-all").addEventListener("click", function () {
  let items = document.querySelectorAll(".shopping-item");
  for (let i = 0; i < items.length; i++) {
    items[i].checked = true;
  }
});
/*2- Implement the Uncheck all button functionality, when clicked all check boxes should become unchecked*/
document.querySelector("#uncheck-all").addEventListener("click", function () {
  let items1 = document.querySelectorAll(".shopping-item");
  for (let i = 0; i < items1.length; i++) {
    items1[i].checked = false;
  }
});
/*3- BONUS: Write a function that updates the log when an item is checked. Check the Example image for clarity
*/

let checkbox = document.querySelectorAll(".shopping-item");

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', function () {
    let logged = [];
    if (checkbox[i].checked == true) {
      logged.push(checkbox[i].value);
    }

    c = document.querySelector("#log");
    let k = 0;
    while (k < logged.length) {
      c.innerHTML += "<br>Bought " + logged[k];
      k++
    }
  });
}



