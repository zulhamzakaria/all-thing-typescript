// export const Greet = () => {
//   return (
//     <div>
//       <h2>Cock</h2>
//     </div>
//   );
// };

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedId: boolean;
};

export default function Greet({ name, messageCount, isLoggedId }: GreetProps) {
  return (
    <div>
      <h2>
        {isLoggedId
          ? `Hoi, ${name}! u have ${messageCount} unread message(s)!`
          : "Halt! Unauthorized access!"}
      </h2>
    </div>
  );
}
