//exception is an abnormal code
//exception  handling
//try catch finally throw
var num1=10
var num2=0
try{
    if(num2==0 )throw "division by zero"
var res=num1/num2
console.log("res="+res)
}
catch(err)
{
    console.log("division by zero")
}
finally{
    console.log("inside finally block")
}
//try=doubtful
//catch=handlibg code
//finally=cleanup code

