//static =for efficinet memory usage
class Student
{
    static get collegename()//for accesing static methods in outside we use get keyword
    {
        var clgname="luminar";
        return clgname;
    }
    static printcollegename()
    {
        var clgname="luminar";
        console.log(clgname)
    }
    setstudent(rol,name)
    {
        this.rol=rol;
        this.name=name;
    }

    getstudent()
    {
        console.log("roll="+this.rol)
        console.log("name="+this.rol)
        Student.printcollegename();//static name can be accesed by using  classname inside class
        
    }
}
class Myclass extends Student
{

}
var ob=new Myclass()
ob.setstudent(1001,"neena")
ob.getstudent()
console.log(Myclass.collegename)//outsidecallin method 



