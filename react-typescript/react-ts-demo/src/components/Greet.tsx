import { GreetProps } from "./Props";

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
