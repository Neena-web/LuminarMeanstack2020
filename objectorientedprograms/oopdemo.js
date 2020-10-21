//class=collection of object,blueprint
//object realworld entity
//reference
//class=tv
//object=Lg
//reference=remote
class person
{
    setperson(age,name)
    {
        this.age=age;
        this.name=name;
    }
    printperson()
    {
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}
var obj=new person()
obj.setperson(25,"ajay")
obj.printperson();


var obj1=new person()
obj1.setperson(22,"neena")
obj1.printperson()