type Celeb = Record<string, { name: string; profession: string }>;

// const needs to be initialized
const celebs: Celeb = {};
celebs["001"] = { name: "Sydney", profession: "actor" };
celebs["002"] = { name: "billie", profession: "singer" };

type Roles = "admin" | "hr";
type Employee = Record<Roles, string[]>;

const emps: Employee = { admin: ["tom", "vin"], hr: ["bill"] };
