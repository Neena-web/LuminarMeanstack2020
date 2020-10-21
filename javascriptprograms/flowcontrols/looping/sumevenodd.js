var i=1;
var limit=50;
var evensum=0;
var oddsum=0;
while(i<=limit)
{
    if(i%2==0)
    {
        evensum=evensum+i;
        

    }
    else
    {
        oddsum=oddsum+i;
    }

i++;
}
console.log("evevsum="+evensum);
console.log("oddsum="+oddsum);