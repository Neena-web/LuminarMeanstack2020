var arr=[10,2,4,11]
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);
//var arr=arr.sort((i,j)=>i-j) //i-j means i comes before j//ascending
//for descendin set j-i




