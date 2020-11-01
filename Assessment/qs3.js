//find the sum of series having n number of numbers 
//inp=3
//out=3+33+333=369
var num=3;
var sum=0;
var n=num
var a=[]
for(i=1;i<=num;i++)
{
    a.push(n)
    n=(n*10)+num 

}
for(num of a)
{
    sum=sum+num;
}
console.log(sum)


