var employee={eid:1001,ename:"rahul",desig:"devops"}
console.log(employee)
//printing
console.log(employee.ename);
//check for salary
console.log("salary" in employee)

employee["salary"]=25000;
console.log(employee)


 employee["salary"]+=5000
 console.log(employee)
  for(key in employee)
  {
      console.log(key+","+employee[key])
  }