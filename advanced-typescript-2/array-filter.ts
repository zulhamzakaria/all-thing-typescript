const array = ["hello", null, "world"];

const upperCaseStrnigs = array
  .filter((item): item is string => typeof item === "string")
  .map((item) => item.toUpperCase());

  // updated version of TS doesnt require u to use predicate
const upperCaseStrings = array
  .filter((item) => typeof item === "string")
  .map((item) => item.toUpperCase());
