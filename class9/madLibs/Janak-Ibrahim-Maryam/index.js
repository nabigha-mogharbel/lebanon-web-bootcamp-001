// write your code here

document.getElementById("lib-button").addEventListener('click', function () {
let noun= document.getElementById("noun").value;
let adjective= document.getElementById("adjective").value;
let person=  document.getElementById("person").value;
 document.getElementById("story").innerText=`${noun} ${adjective} ${person}`;
});

