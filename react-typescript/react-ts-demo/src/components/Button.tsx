type ButtonProps = {
  handleClick: () => void;
  handleClickWithEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ handleClick, handleClickWithEvent }: ButtonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      <button onClick={handleClickWithEvent}>Click (with event)!</button>
    </div>
  );
};
