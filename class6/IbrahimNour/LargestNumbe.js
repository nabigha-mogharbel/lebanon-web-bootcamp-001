let list=[300, 200, 600, 150];
function largestNumber(list){
  largest=0
  for (let s of list) {
    if(s>largest){
      largest=s;
    }
  }
  return largest;
}
console.log(largestNumber(list));