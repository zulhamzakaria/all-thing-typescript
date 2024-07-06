type ListProps<T> = {
  items: T[];
  onClick: (val: T) => void;
};

export const List = <T extends string | number>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div
      style={{
        paddingBottom: "10px",
        marginBottom: "10px",
        border: "1px solid black",
      }}
    >
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
