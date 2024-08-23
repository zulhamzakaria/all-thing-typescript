const array = ["hello", null, "world"];

const upperCaseStrnigs = array
  .filter((item): item is string => typeof item === "string")
  .map((item) => item.toUpperCase());
