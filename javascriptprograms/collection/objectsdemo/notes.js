 
//data are sorted in key value form
var student={rol:1001,name:"neena",course:"btech"}
console.log(student);
//to fetch value we have to use corresponding key
console.log(student["name"])
console.log(student.name)
//we  want to add total:150;
student["total"]=150;
console.log(student)
//we want to check a perticular key
console.log("gender" in student);
//op=false
console.log("name" in student);//op=true

//for updating value
student["total"]+=25;
console.log(student.total);
//for taking values in one by one
for(key in student)
{
  console.log(key+","+student[key])  
}


