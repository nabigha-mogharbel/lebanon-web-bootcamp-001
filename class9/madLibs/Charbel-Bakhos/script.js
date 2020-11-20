let result = document.getElementById('story');
function mk(){
  result.innerText = document.getElementById('person').value + ' really likes ' + document.getElementById('adjective').value + ' '+document.getElementById('noun').value;
  return result;
}
document.querySelector('button').addEventListener('click',mk);