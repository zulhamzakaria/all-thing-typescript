function example(val: string | null | undefined) {
  if (val == null) {
    console.log("null|undefined", val);
  } else {
    console.log("string", val);
  }

  //alternatively
  if (val != null) {
    console.log("string", val);
  }
}
