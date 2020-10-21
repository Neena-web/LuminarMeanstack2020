let employee=
[
 {eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
 {eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
 {eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
 {eid:103,name:"john",desig:"ba",join:1989,resign:2010},
 {eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
 {eid:105,name:"lari",desig:"qa",join:1987,resign:2010}
]
//name and desig of all employee
console.log("name and desig of all employees")
var nd=employee.map(obj1=>"name="+obj1.name+" desig="+obj1.desig)
console.log(nd)

//print all employee details whose desig equals devop
console.log("employees with desig equals devop")
var emp=employee.filter(obj=>obj.desig=="devop")
console.log(emp)

//print all employee details those  who are working in 80 s
console.log("employees working in 80 s")
var eight=employee.filter(obj=>obj.join>=1980&obj.join<1990)
console.log(eight)

//print all employee details those who have experience>9yeras
console.log("employees with experience > 9yeras")
var ex=employee.filter(num=>(num.resign-num.join)>=9)
console.log(ex)

//sort all employee based on their joining year\
console.log("sorted list of employee based on their joining")
var sor=employee.sort((obj1,obj2)=>obj1.join-obj2.join)
console.log(sor)







