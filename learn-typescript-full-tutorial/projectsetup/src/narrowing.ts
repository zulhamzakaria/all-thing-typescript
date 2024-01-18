function detectype(val: string | number) {
  if (typeof val === "string") {
    val.toLowerCase();
  } else {
    val + 3;
  }
}

function provideId(id: string | null) {
  if (!id) {
    return;
  }
  return id.toLowerCase();
}

interface Person {
  name: string;
  age: number;
}

interface Student {
  name: string;
  age: number;
  studentId: string;
}

function isStudent(subject: Person | Student) {
  if ("studentId" in subject) {
    return isStudent;
  }
  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    return x.toUTCString();
  }
  return x.toLowerCase();
}

type Fish = { swim: () => {} };
type Bird = { fly: () => {} };

// predicate
function isFish(x: Fish | Bird): x is Fish {
  return (x as Fish).swim !== undefined;
}

function getFood(x: Fish | Bird) {
  if (isFish(x)) {
    x;
    return "fish food";
  } else {
    x;
    return "bird food";
  }
}
