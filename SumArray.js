let arr=[1,2,3,4,5];
let sum=0;
arr.forEach((val)=>{
    if(val%2==0)
    {
        sum=sum+val;
    }
})
  console.log(sum);