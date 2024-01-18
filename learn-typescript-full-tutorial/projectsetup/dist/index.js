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
        this._courseCount = 1;
        user.name = "jonny";
        user.age = 78;
    }
    get genEmail() {
        return `mail@mail.com`;
    }
    get CurseCount() {
        return this._courseCount;
    }
    set CourseNumber(courseNumber) {
        this._courseCount = courseNumber;
    }
}
const client = new User("jonny", 18);
