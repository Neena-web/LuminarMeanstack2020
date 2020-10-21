var num=11,flag,i;
for(i=2;i<num/2;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }
    else
    {
        flag=0;
        
    }

}
if(flag==1)
{
    console.log(" not prime number");

}
else
{
console.log("prime");
}

