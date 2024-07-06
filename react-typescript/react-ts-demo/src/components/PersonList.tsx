type Person = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ names }: Person) => {
  return (
    <div>
      {names.map((name) => (
        <h2 key={name.first}>
          {name.last}, {name.first}
        </h2>
      ))}
    </div>
  );
};
