//impossible types
type alphaNumeric = string & number;
type bool = string & boolean;

//takes the common type as the default type (number)
type stringOrNumber = string | number;
type boolOrNumber = boolean | number;
type newType = stringOrNumber & boolOrNumber;

