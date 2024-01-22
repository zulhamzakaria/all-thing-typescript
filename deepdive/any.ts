// can represent ANY type
// disable type checking
let color: any;
color = "green";
console.log(typeof color);
color = 123;
console.log(typeof color);
color = true;
console.log(typeof color);
color = (message: string) => {
  return message;
};
console.log(color("cock"));
console.log(typeof color);
