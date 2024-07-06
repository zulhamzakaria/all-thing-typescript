type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h3>
        {props.name.last}, {props.name.first}
      </h3>
    </div>
  );
};
