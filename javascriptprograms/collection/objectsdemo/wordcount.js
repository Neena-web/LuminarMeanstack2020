var data="hello hai hello hai hello";
//hello=3,hai=2
//we want the data as words.so we want to split it with space
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
