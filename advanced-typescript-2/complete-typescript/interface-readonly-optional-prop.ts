interface SomeProps {
  readonly id: number;
  color: string;
  size?: "sm" | "lg" | "base";
}

const someVar: SomeProps = { id: 1001, color: "red" };
const someVar2: SomeProps = { id: 1001, color: "red", size: "base" };

someVar.color = "green";
//@ts-ignore
someVar.id = 1002; //cant re-assign value
