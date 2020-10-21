class student
{
    setstudent(rol,name,course,total)
    {
        this.rollnumber=rol
        this.name=name
        this.course=course
        this.total=total
    }
    getstudent()
    {
        console.log("rollnumber="+this.rollnumber)
        console.log("name="+this.name)
        console.log("course="+this.course)
        console.log("total="+this.total)
    }
}
var obj=new student()
obj.setstudent(21,"neena","meanstack",32000)
obj.getstudent()