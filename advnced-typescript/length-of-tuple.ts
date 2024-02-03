const tesla = ["tesla", "model 3"] as const;

// lookup type 'length' that exists in string array
type Length<T extends readonly string[]> = T["length"];
