type WithName = {
  name: string;
};

function printName(name: WithName) {
  console.log(name.name);
}

printName({
  name: "jonny",
});
