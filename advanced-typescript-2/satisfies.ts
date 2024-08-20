type Color = ColorString | ColorRGB;
type ColorString = "red" | "blue" | "green" | "yellow";
type ColorRGB = [red: number, green: number, blue: number];

type Theme = Record<string, Color>;

const theme = {
  primary: "red",
  secondary: [0, 255, 0],
  tertiary: "yellow",
} satisfies Theme;
