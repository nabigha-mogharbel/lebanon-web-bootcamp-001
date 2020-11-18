function societyName(arr){
    let result='';
    for(let i=0; i< arr.length; i++){
      result+=arr[i].charAt(0)
      
    }console.log(result)
  }
  societyName(['Samira','Mhamad','Bakhos'])
  
  
  
  function chatroomStatus(array){
    if(array.length==0){
        console.log('no one online')
      }
    else{
      result='';
      if(array.length==1){
    console.log(array[0]+' online')
      }
       if(array.length==2){
    console.log(array[0]+' and '+array[1]+' online')
      }
       if(array.length>2){
    console.log(array[0]+', '+ array[1]+' and '+ array.splice(2).length+' more online')
      }
  }
    }
  
  chatroomStatus(['liz', 'Ammar','Fadi']);
  
  
  
  
  function reverseCase(sentence){
    let result='';
    for(let i=0; i<sentence.length; i++){
      if (sentence.charAt(i)==sentence.charAt(i).toUpperCase()){
        result += sentence.charAt(i).toLocaleLowerCase('en-US');
      }
      else{
        result += sentence.charAt(i).toLocaleUpperCase('en-US');
      }
      
    }
    console.log(result)
  }
  
  reverseCase('sPoNtAnEoUs');
  
  
  