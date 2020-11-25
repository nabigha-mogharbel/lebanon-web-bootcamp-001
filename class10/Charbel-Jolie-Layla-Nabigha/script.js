// Entries should be an *array of objects*.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => {
  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */
 let firstName=document.getElementById("firstName").value;
 let lastName=document.getElementById("lastName").value;
 let bio=document.getElementById("bio").value;
 
 let data={};
data.firstName=firstName;
data.lastName=lastName;
data.bio=bio;
entries.push(data);
console.log(entries);
  // This function is called for you. You also have to implement it.
  e.preventDefault();
 renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!
function renderPeople(people) {
 let output=document.getElementById("output");

   output.insertAdjacentHTML("afterend",`<p>${people[people.length-1].firstName} ${people[people.length-1].lastName} ${people[people.length-1].bio}</p>`);
}
