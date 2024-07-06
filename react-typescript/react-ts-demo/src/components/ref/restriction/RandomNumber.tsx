type NumberValue = {
  value: number;
};

type PositiveNumber = NumberValue & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = NumberValue & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = NumberValue & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
