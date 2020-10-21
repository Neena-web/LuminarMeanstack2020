var r,result=0;
var num=153;
var m=num;
console.log(num);
while(m!=0)
{
    r=m%10;
    result=result+r*r*r;
    m=Math.floor(m/10);
}
console.log(result);
if(num==result)
{
    console.log(num+" is a amstrong number");
}
else
{
console.log(num+" is not a amstrong number");
}