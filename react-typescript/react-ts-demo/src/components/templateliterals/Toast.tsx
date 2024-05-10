type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

type ToastPositonProps = {
  position:
    | Exclude<`${Horizontal}-${Vertical}`, "center-center" | "left-center">
    | "center";
};

export const Toast = ({ position }: ToastPositonProps) => {
  return <div>toast notification position - {position} </div>;
};
