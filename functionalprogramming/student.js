//HW
//student class which have rollnumber,name total,course
//print all student name and idthose whonhave total>135
//print all student name those who have course=bca
//find sum of student total those who have couse=bca;
class student
{

     constructor(name,rollnum,course,total)
     {

         this.name=name;
         this.rollnumber=rollnum
         this.course=course;
         this.total=total
     }
     getdetails=()=>
     {
         console.log("name="+this.name)
         console.log("rollnumber="+this.rollnumber)
         console.log("course="+this.course)
         console.log("total="+this.total)
     }
}
var obj=new student("neenz",21,"mba",180)
var obj1=new student("anu",15,"bca",120)
var obj2=new student("amal",30,"bca",150)
var obj3=new student("rose",25,"mca",100)
var obj4=new student("jack",18,"bca",135)
var result=[]
result.push(obj)
result.push(obj1)
result.push(obj2)
result.push(obj3)
result.push(obj4)
var sum=0
console.log("students have total>135")
//total>135
var  stud=result.filter(obj=>obj.total>135)
for(st of stud)
{

    console.log(st.name)
}
//course=bca
console.log("students with course bca")
var course1=result.filter(obj=>obj.course=="bca")
console.log(course1)
//sum of total
var total=course1.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log("sum of total="+total)
//highest mark
var  maxtotal=result.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log("highest total"+maxtotal)
var details=result.filter(obj=>obj.total==maxtotal)
console.log(details)
//lowest total
var lowest=result.map(obj=>obj.total).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2)
console.log("lowest total="+lowest)
//sorting total
var sorttotal=result.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2) 
console.log(sorttotal)  
//hw
//create class for employeee eid name desig salary
//print highest salary employee information
//print lowest salry employee information
//print employee salary in sorted order
//conclude

//arrow functions 
//map
//filter
//reduce

