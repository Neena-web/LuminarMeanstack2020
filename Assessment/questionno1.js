//print triplets satisfying a*a+b*b=c*c
var arr=[3,1,4,6,5]
var l=arr.length-1
for(i=0;i<=l;i++)
{
    for(j=i+1;j<=l;j++)
    {
        for(k=j+1;k<=l;k++)
        {
            if(((arr[i]*arr[i])+(arr[j]*arr[j]))==(arr[k]*arr[k]))
            {
                console.log("("+arr[i]+","+arr[j]+","+arr[k]+")")
            }
            else{

            }
            
        }
    }
    
}