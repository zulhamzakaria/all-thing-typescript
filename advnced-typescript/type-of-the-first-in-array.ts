// if T extends empty array, returns never
type First<T extends any[]> = T extends [] ? never : T[0];
