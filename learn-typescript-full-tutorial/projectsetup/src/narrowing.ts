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
