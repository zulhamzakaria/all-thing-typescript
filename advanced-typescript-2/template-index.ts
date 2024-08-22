type Attributes = {
  color?: string;
  [data: `data-${string}`]: string | undefined;
};

const classic: Attributes = {
  color: "red",
  "data-name": "classic",
};
