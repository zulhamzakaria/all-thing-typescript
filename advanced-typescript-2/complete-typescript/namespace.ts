/*
- code organizer for modular project
- all files that share the same namespace will be compiled/bundled into one JS file
- logical groupings
*/

namespace UserAction {
  let userList: User[] = [];
  class User {
    constructor(public name: string) {}
  }

  export function createUser(name: string) {
    const user = new User(name);
    userList.push(user);
  }
  export function getUsers() {
    return userList;
  }
}
