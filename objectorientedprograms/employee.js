class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
    getemployeee()
    {
        console.log("eid="+this.eid)
        console.log("ename="+this.ename)
    }

}
var emp=new Employee(100,"neena");
emp.getemployeee();
//constructer is for initialising instance variable
//constructer name always constructer
//it is invoked at the time of object creation