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
