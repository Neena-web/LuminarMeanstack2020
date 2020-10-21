var input="HHHPPSDAAA"
var output=""
var obj={}
var s=input.split("")
for(char of s)
{
    if(char in obj)
    {
        obj[char]+=1
    }
    else
    {
        obj[char]=1
    }

    
}

for(elements in obj)
{
    output+=obj[elements]+elements
}
console.log(output)


