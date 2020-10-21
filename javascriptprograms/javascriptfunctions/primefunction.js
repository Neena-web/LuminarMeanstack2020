function primerange(low,upp)
{
    var flag,i,j;
    for(i=low;i<=upp;i++)
    {
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag=1;
                break;
            }
            else
            {
                flag=0;
            
            }
        }
    
    if(flag==0)
    {
        console.log(i)
    }
    }

   
}
primerange(10,20);