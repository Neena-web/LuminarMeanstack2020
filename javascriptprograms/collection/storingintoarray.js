var arr=[10,11,12,13,14,15,16]
var odd=[]
var even=[]
for(elements of arr)
{
    if(elements%2==0)
    {
        
         even.push(elements)
    }
    else
    {
        odd.push(elements)

    }
}
console.log("even array:",even)
console.log("odd array:",odd)