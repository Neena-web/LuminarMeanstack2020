
//find the user with maximum number of tweet
//print username and total number of tweet in sorting order

var tweets=["sachin tweet1","sehwag tweet1","kholi tweet1","sachin tweet1","kholi tweet1"]
var obj={}
var arr=[]
for(word of tweets)
{
    if(word in obj )
    {
        obj[word]+=1;

    }
    else
    {
        obj[word]=1; 
    }

}
console.log(obj);
for(key in obj)
{
    var num=obj[key]
    arr.push(num)
}
var srt=arr.sort((a,b)=>b-a)
var elem=srt[0]
console.log("user with maximum number of tweets")
for(key in obj)
{
    if(elem==obj[key])
    {
        console.log(key+" "+elem)
    }
}
console.log("sorting order")
for( elements in srt)
{
    for( key in obj)
    {
        if(elements==obj[key])
        {
            console.log(key+" "+elements)
        }

    }
}



