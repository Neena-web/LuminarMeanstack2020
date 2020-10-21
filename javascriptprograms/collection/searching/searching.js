//linear searching
var arr=[1,2,3,4,5,6,7]
//var element=prompt("enter element for searching");for inputing user
var item=6;
var flag=0;
for(elements of arr)
{
    if(elements==item)
    {
        flag+=1;
       
        break;
    }
}
if(flag>0)
{
    console.log("element found");
}
else
    {
        
        console.log("not found");
        
    }
