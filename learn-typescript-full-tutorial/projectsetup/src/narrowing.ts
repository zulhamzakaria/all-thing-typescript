function detectype(val: string | number) {
  if (typeof val === "string") {
    val.toLowerCase();
  } else {
    val + 3;
  }
}

function provideId(id: string | null) {
  if (!id) {
    return;
  }
  return id.toLowerCase();
}
