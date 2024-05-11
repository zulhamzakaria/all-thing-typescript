import { ElementType } from "react";

const Test = <E extends ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export default Test;

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
