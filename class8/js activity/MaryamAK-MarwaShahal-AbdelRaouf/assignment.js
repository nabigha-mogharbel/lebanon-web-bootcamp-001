//first work
let array = ["Marwa", "Maryam", "Raouf"];
let newArray=[];
let name="";
for(let i=0; i<array.length ; i++)
{
 array.sort();
 name+=array[i].charAt(0);
}
console.log(name);

//second work
let name1="sPoNtAnEoUs";
let name2="";
for(i=0 ; i<name1.length; i++)
{
      if(name1.charAt(i)===name1.charAt(i).toLowerCase())
      {
        name2+=name1.charAt(i).toUpperCase();
      }
      else if(name1.charAt(i)===name1.charAt(i).toUpperCase())
            {
             name2+=name1.charAt(i).toLowerCase()
            }
}
console.log(name2);

//third work
let array2 = ["ali", "maryam", "marwa", "raouf"];
if(array2.length==0)
{
  console.log("no one online");
}else if(array2.length==1)
    {
      console.log(array2[0]+" online");
    }else if(array2.length==2)
        {
         console.log(array2[0]+" and "+array2[1]+" online");
        }else if(array2.length>2)
            {
              console.log(array2[0]+", "+array2[1]+" and "+(array2.length-2)+" online");
            }  

