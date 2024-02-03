console.log(3 % 2); // 1
console.log(2 % 2); // 0

const isEven = (value: number) => value % 2 === 0;

for (let x = 0; x <= 100; x++) {
  if (x % 9 === 0) {
    console.log(x);
  }
}

function getNthItems<T>(array: T[], nth: number): T[] {
  return array.filter((_, i) => i % nth === 0);
}

type Time = {
  hour: number;
  minute: number;
  second: number;
};

function makeTime(seconds: number): Time {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor(seconds / 60) % 60;
  const second = seconds % 60;
  return { hour, minute, second };
}
