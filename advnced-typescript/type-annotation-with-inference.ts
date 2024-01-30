type Color = ColorString | ColorRGB;
type ColorString = "red" | "blue" | "purple" | "yellow";
type ColorRGB = [red: number, green: number, blue: number];

/* 
Theme is an object type where the keys are strings and the values 
are of type Color
*/
type Theme = Record<string, Color>;

// red exists in colorstring, [0, 255, 0] exists in colorrgb,
// purple exists in colorstring
const theme = {
  primary: "red",
  secondary: [0, 255, 0],
  tertiary: "purple",
} satisfies Theme;

const _ensureTheme: Theme = theme;

const [r, g, b] = theme.secondary;
