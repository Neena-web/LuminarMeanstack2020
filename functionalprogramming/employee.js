class Employee
{
    constructor(eid,ename,desig,sal)
    {
        this.eid=eid
        this.ename=ename
        this.desig=desig;
        this.salary=sal;
    }
    getemp=()=>{

        console.log(this.ename)
        console.log(this.desig)
        console.log(this.salary)
    }
}
var obj=new Employee(1001,"ajay","developer",25000)
var obj1=new Employee(1002,"neena","tester",30000)
var obj2=new Employee(1003,"anu","developer",18000)
var emp=[]
emp.push(obj);
emp.push(obj1);
emp.push(obj2);
//print all employees who have salary >220000
for(e of emp)
{
    if(e.salary>22000)
    {
        console.log(e.ename+e.salary)
    }
}
//print all employees desg=developer

for(e of emp)
{
    if(e.desig=="developer")
    {
        console.log(e.ename+e.desig)
    }
}
//HW
//student class which have rollnumber,name total,course
//print all student name and idthose whonhave total>135
//print all student name those who have course=bca
//find sum of student total those who have couse=bca;