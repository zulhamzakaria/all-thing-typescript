export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>{name}'s Private Profile Component</div>;
};
