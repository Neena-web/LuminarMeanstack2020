//method overriding possiblle in different classes
class parent
{
    bike()
    {
        console.log(" i have passion pro")
    }
}
class child extends parent
{
    bike()
    {
        console.log("i have duke")
    }

}
var ch=new child();
ch.bike();
