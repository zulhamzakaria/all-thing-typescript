type Persons = Record<string, { name: string; role: string }>;
const persons: Persons = {};
persons["0001"] = { name: "jonny", role: "admin" };
persons["0002"] = { name: "jony", role: "CS" };

type Roles = "admin" | "CS";
let peopleWitHRoles: Record<Roles, string[]> = {
  admin: ["Jane"],
  CS: ["Blawg", "Tuna"],
};
const admins: string[] = peopleWitHRoles["admin"];

type PageInfo = {
  id: string;
  title: string;
};
type PagesVerbose = {
  home: PageInfo;
  services: PageInfo;
};

type Pages = Record<"home" | "services", { id: String; title: string }>;
