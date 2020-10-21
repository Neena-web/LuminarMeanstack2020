var ho=document.getElementsByTagName("h1")
for( h of ho)
{
    h.style.color="red";
}
var first=document.getElementById("first")
first.style.color="green"
 var cls=document.getElementsByClassName("two")
 for(cl of cls)
 {
     cl.style.color="violet"
 }
 var tst=document.querySelectorAll("li")
 for(let it of tst)
 {
     it.style.color="green";
 }


 var meth=document.querySelector("#mth")
 meth.style.color="cyan";


 var list=document.querySelectorAll(".lis")
 for(let ls of list)
 {
     ls.style.color="brown";
 }

 var hone=document.querySelector("#first")
 var data=hone.textContent;//for getting the content
 alert (data)
 //for changing in this we get the first named class  content.for all use queryselector all
 hone.textContent="helloworld";


 