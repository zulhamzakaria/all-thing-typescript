type Person = { name: string; empId: string };

type Admin = Readonly<Person>;

let adm1: Admin = {
  name: "jonny",
  empId: "001",
};

// invalid action
// adm1.empId = "900";
