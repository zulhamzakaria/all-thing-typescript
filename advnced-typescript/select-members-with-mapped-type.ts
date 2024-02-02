export type Point3D = {
  x: number;
  y: number;
  z: number;
};

// create Point2D (x,y) from Point3D
export type Pick<T, K extends keyof T> = {
  [index in keyof T]: T[index];
};

// Pick<> is an existing type in TS
export type Point2D = Pick<Point3D, "x" | "y">;

// use case
type CSSProps = {
  color?: string;
  bgColor?: string;
  width?: number;
  height?: number;
};

function setSize(
  element: HTMLElement,
  size: Pick<CSSProps, "width" | "height">
) {
  element.setAttribute("width", (size.width ?? 0) + "px");
}
