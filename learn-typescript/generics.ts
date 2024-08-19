// addid is now of type T
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  // mesh the id and obj together by spreading the obj
  return {
    id,
    ...obj,
  };
};

interface IUser {
  name: string;
}

const user: IUser = {
  name: "jonny",
};

console.log(addId(user));
// alternatively
const result = addId(user);
const result2 = addId<IUser>(user);
