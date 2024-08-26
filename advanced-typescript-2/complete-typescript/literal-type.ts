// the type of greet is Hello, world hence the literal type connotation
// let allows for the variable to be re-assigned, so it's taking string type
const greet = "Hello, world";
let greet2 = "Hello, human";

type Roles = "admin" | "user";

function roleMessage(role: Roles) {
  switch (role) {
    case "admin":
      console.log("do everything");
      break;
    case "user":
      console.log("do somn");
      break;
    default:
      console.log("unknown role");
      break;
  }
}

roleMessage("admin");
