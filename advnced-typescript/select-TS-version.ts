type Attributes = {
  color?: string;
  font?: string;
  [data: `data-${string}`]: string | undefined;
};

const classic: Attributes = {
  color: "red",
  font: "wingdings",
  "data-name": "classic",
};
