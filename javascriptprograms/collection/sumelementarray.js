//create an array of sum of its elements of an arraay
var arr=[4,8,2];
var res=[];
var len=arr.length-1;
console.log(len)
var i=0;
for(item of arr)
{
    for(j=1;j<len;j++)
    {
        res[i]=item+arr[j];
        i++

    }
}


console.log(res)