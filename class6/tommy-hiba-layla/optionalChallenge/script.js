let x=1;
let y=2;
let z=2;

while(z<=4000000)
{
  if((x+y)%2==0)
  {
  z=z+x+y;
  }
  x=y;
  y=x+y;
}
console.log(z);
/*
let x= 1;
let y=2;
let i=0;
let a[];
let sum=0;
a[0] = x;
a[1] =y;
for (i=0 ; i<4000 ; i++){
  
}*/