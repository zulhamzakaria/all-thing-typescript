import React from "react";

export const Input = (props: InputProps) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

type InputProps = React.ComponentProps<"input">;
