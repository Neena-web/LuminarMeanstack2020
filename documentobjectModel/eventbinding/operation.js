
//value=for getting value
var hd=document.querySelector("h1") 
calc=()=>
{
    var num=Number(document.querySelector("#num").value)
    let res=num**3;
    alert(res)
    hd.textContent=res;
}



