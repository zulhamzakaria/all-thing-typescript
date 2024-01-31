type Person = {
  name: string;
  age: number;
};

//type PersonKeys = keyof Person;
// function logAccess(object: Person, key: PersonKeys): Person {
//   return proxy(object, key);
// }

function logAccess<T>(object: T, key: keyof T): T {
  return proxy(object, key);
}

const todo = logAccess({ name: "blawg", age: 1 }, "name");
todo.name = "clawg";

export function proxy(object: any, key: any): any {
  return new Proxy(object, {
    get(target, prop, receiver) {
      if (prop === key) {
        console.log("getting", key, target[prop]);
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      if (prop === key) {
        console.log("setting", key, value);
      }
      return Reflect.set(target, prop, value, receiver);
    },
  });
}
