var data="hello hai hello hai hello";
var words=data.split(" " );//list
console.log(words);//[ 'hello', 'hai', 'hello', 'hai', 'hello' ]
var obj={}
for(word of words)
{
    if(word in obj )//if hello key is present in ob
    {
        obj[word]+=1;//increment;

    }
    else
    {
        obj[word]=1;//storing in to obj 
    }

}
console.log(obj);
var arr=[]
for(key in obj)
{
    var num=obj[key]
    arr.push(num)
}
var srt=arr.sort((a,b)=>b-a)
var elem=srt[0]
for(key in obj)
{
    if(elem==obj[key])
    {
        console.log(key)
    }
}