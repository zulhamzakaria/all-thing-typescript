type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <button
      className={`class-with-${variant}`}
      style={{ border: "1px solid black" }}
      {...rest}
    >
      {children}
    </button>
  );
};
