//step1:input always a sorted array
var arr=[1,2,3,4,5,6,7,11]
//step2
//low<-0 upp<8
var low=0;
var upp=arr.length-1;
var element=3;
var flag=0;
while(low<upp)
{
   var mid=Math.floor((low+upp)/2);//mid value
//case1
  if(element>arr[mid])
  {
   low=mid+1;
  
}
//case2
else if(element<arr[mid])
{
upp=mid-1;
}
//case3
else if(element==arr[mid])
{
    flag+=1;
    
    break;
}
}
if(flag>0)
{
    console.log("element  found");
}
else
{
    console.log("element  not found");
}
