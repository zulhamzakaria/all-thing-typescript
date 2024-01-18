"use strict";
function detectype(val) {
    if (typeof val === "string") {
        val.toLowerCase();
    }
    else {
        val + 3;
    }
}
function provideId(id) {
    if (!id) {
        return;
    }
    return id.toLowerCase();
}
function isStudent(subject) {
    if ("studentId" in subject) {
        return isStudent;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        return x.toUTCString();
    }
    return x.toLowerCase();
}
// predicate
function isFish(x) {
    return x.swim !== undefined;
}
function getFood(x) {
    if (isFish(x)) {
        x;
        return "fish food";
    }
    else {
        x;
        return "bird food";
    }
}
