let mine=[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];
let neighborcells = [[-1,-1], [-1,0], [-1,+1], [0,-1],[0,+1], [+1,-1], [+1,0], [+1,+1]];

let Mine=mine.map(row => row.map(ele => ele===1?9:ele))

for(let i=0;i<Mine.length; i++){
  for(let j=0; j<Mine[0].length; j++){
    if (Mine[i][j]!==9){
      for (let k=0; k<neighborcells.length; k++){
        if(Mine[i+neighborcells[k][0]]!== undefined && Mine[i+neighborcells[k][0]][j+neighborcells[k][1]]===9){
          Mine[i][j]++
        }

      }
    }
  }
}
console.log(Mine)