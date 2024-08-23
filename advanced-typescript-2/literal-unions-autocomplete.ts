// add an empty object to the primitive type that is string
type Padding = "sm" | "base" | "lg" | (string & {});

function getPadding(padding: Padding) {
  if (padding === "sm") return "12px";
  if (padding === "base") return "16px";
  if (padding === "lg") return "20px";
  return padding;
}

let padding: Padding;
padding = "small";
padding = "8px";
