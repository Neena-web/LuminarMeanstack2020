//polymorphism
//many forms
   //1.method overloading
   //2.method overriding

//1
class Maths
{
    add()
    {
        console.log(10+20)
    }
    add(num1)
    {
        console.log(20+num1);

    }
    add(num,num1)
    {
        console.log(num+num1)
    }
}
var calc=new Maths();
calc.add(10,20)
//same method name but different number of arguments but in javascript only recently implementd method executed