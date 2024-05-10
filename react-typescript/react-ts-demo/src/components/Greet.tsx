// export const Greet = () => {
//   return (
//     <div>
//       <h2>Cock</h2>
//     </div>
//   );
// };

type GreetProps = {
  name: string;
};

export default function Greet({ name }: { name: string }) {
  return (
    <div>
      <h2>Hoi, {name}!</h2>
    </div>
  );
}
