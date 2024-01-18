"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        // readonly effective outside of constructor
        this.ssn = "JN908872-43KL";
        this.name = name;
        this.age = age;
        this.ssn = "000";
    }
}
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
class UserFromType {
    constructor(user) {
        user.name = "jonny";
        user.age = 78;
    }
}
const client = new User("jonny", 18);
