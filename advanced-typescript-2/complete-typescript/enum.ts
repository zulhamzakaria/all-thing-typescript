enum AccessRole {
  Admin,
  User,
  Buyer,
}

const user = {
  name: "jonny",
  age: 19,
  accessRole: AccessRole.Admin,
};

if (user.age > 19) {
  console.log("young adult");
}

if (user.accessRole === AccessRole.Admin) {
  console.log("hi, admin");
}
