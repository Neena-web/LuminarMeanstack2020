var num1=10;
var num2=40;
var num3=30;
var largest=0;
if(num1>num2 & num1>num3)
{
    if(num2>num3)
    {
        console.log("num2 is secondlargest");
    }
    else{
        console.log("num3 is secondlargest");
    }
}
else if(num2>num1 & num2>num3)
{
    if(num1>num3)
    {
        console.log("num1 is secondlargest");
    }
    else{
        console.log("num3 is secondlargest");
        
    }
    
}
else if (num3>num1 & num3>num2){
    if(num1>num2)
    {
        console.log("num1 is secondlargest");
    }
    else{
        console.log("num2 is secondlargest");
    }
    
}
else if(num1==num2&num2==num3)
{
console.log("numbers are equal");
}