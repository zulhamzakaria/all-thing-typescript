type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  dept: string;
};

type Admin = Person & Employee;

const jonny: Admin = {
  name: "jonny",
  age: 25,
  employeeId: "E001",
  dept: "HR",
};

function getUser() {
  const uname = "rose";
  const age = 29;
}

interface IMessage {
  message: string;
  code: number;
}

function PrintMessage(message: IMessage) {
  console.log(`${message.message} ${message.code.toString().trim()}`);
}

PrintMessage({ message: "ok", code: 200 });

const someMessage: IMessage = {
  message: "not found",
  code: 404,
};
PrintMessage({ ...someMessage });

function isString(val: unknown): val is string {
  return typeof val === "string";
}
