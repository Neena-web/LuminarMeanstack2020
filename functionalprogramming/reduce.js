var arr=[1,2,3,4,5,6]
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total)
//find highest
var high=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high)
