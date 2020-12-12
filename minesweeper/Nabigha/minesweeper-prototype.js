let mine=[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];
let neighborcells = [];
let Mine=mine.map(row => row.map(ele => ele===1? 9:finalizematrix()))
console.log(Mine) 
let i=mine.length-1
let j=mine[0].length-1
console.log(i, j)



function addneighborcells(ninematrix) {
  for(let i=0; i<mine.length ;i++){
    for(let j=0; j<mine[0].length; j++){
      return neighborcells.push(ninematrix[i][j+1],ninematrix[i+1][j+1],ninematrix[i+1][j])
      if(i-1>=0){return neighborcells.push(ninematrix[i-1][j], ninematrix[i-1][j+1])}
      else if(j-1>=0){ neighborcells.push(ninematrix[i][j-1], ninematrix[i+1][j-1])}
      else if(j-1>=0 && i-1>=0){neighborcells.push(ninematrix[i-1][j-1])}
      return neighborcells
      finalizematrix(ninematrix[i][j])
    }
   return ninematrix
  }
}
function finalizematrix(element) {
  return element=neighborcells.filter(cell => cell=9).length
  
}
console.log(neighborcells)
addneighborcells(Mine);
console.log(Mine)