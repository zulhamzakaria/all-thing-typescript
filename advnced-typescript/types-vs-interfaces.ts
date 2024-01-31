export interface Point2d {
  x: number;
  y: number;
}
export interface Point3d extends Point2d {
  z: number;
}

const mapped: Point3d = { x: 2, y: 4, z: 0 };

export class Example implements Point3d {
  x: 2;
  y: 4;
  z: 0;
}

export type Point2D = {
  x: number;
  y: number;
};

export type Point3D = Point2D & {
  z: number;
};

// type w/ interrface
export type Point3DD = Point2d & {
  z: number;
};

const someVar: Point3DD = { x: 0, y: 0, z: 0 };

/*
INTERFFACE
- for structural hierarchy; use with extends
- Declaration Merging, Familiarity

TYPE
- allows for type aliases i.e InputOnChange
- unions, primitives, shorthand functions, adv type functions
*/
type InputOnChange = (newVal: string) => void;
export type InputProps = {
  type: "text" | "email";
  value: string;
  onChange: InputOnChange;
};

const pokeman: Array<string> = ["butherfree", "pikuach"];
