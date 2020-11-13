function sumEvenFib(){
  let num3=1;
  let fib=0;
  temp=0;
  sum=0
  while(fib<4000000){
    temp=fib;
    fib=fib+num3;
    num3=temp;
    if(fib%2!=0){
      sum=sum+fib;
    }
  }
  return(sum) 
}
console.log(sumEvenFib());