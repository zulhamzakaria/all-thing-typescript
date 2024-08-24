var employee = { empId: "E001", dept: "HR" };
employee.dept = "Admin";
// if the variable is set to object/{} type, u dont have to assign value to all elements
var employee2 = { empId: "E001", dept: "HR", gender: "m" };
//employee2 = { empId: "E002" };
console.log(employee2["empId"] + employee2["dept"]);
