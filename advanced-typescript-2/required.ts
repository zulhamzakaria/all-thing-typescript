type PartialPoint = { x?: number };

// x becomes required though the original is optional
type Point = Required<PartialPoint>;
