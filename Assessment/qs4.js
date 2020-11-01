//power lies in the range of min and max
var n=3;
var min=49;
var max=65;
for(i=1;i<20;i++)
{
    var p=i**n;
    if(p>=min & p<=max)
    {
        console.log(p+"("+i+"^"+n+")")
    }

}