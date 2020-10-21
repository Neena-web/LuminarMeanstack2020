var num=123,r,m,rev=0;
m=num;
while(m!=0)
{
    r=m%10;
    rev=rev*10+r;
    m=Math.floor(m/10);
}
console.log("reverse:",+rev);