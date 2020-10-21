var low=10;
var upp=50;
var i,test,j;
for(i=low+1;i<upp;i++)
{
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            test=1;
            break;
        }
        else{
            test=0;
        }
    }
    if(test==0)
    {
        console.log(i)
    }
}
    
       
    




//what is the difference betwwen while and for