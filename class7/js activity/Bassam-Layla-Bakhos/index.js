function addUp(x){
    let z=0;
    for(let i=0; i<=x; i++){
      
      z=i+z;
      
    }console.log(z);
  }
  
  addUp(5);
  
  
  function doubleChar (c){
  let z='';
  for (let i=0;i<=c.length;i++){
    if(c.charAt(i)==' '){
      z=z+(c.charAt(i));
    }
  else {
    z=z+(c.charAt(i))+(c.charAt(i));
    }
  
  }
  console.log(z);
  
  }
  
  let x='Hello World!';
  doubleChar(x);
  