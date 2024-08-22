type Person = {
  name: string;
};

type Details = {
  age: number;
};

type Student = Person & Details;

const student1: Student = {
  name: "ameera",
  age: 20,
};

// type guard with in keyword
if ("name" in student1) {
  console.log(student1.name);
}

// as keyword
if ("name" in student1) {
  const stud = student1 as Person;
  console.log(stud.name);
}
