import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  const names = [
    { first: "A", last: "B" },
    { first: "C", last: "D" },
    { first: "E", last: "F" },
  ];

  return (
    <div className="App">
      <Greet name={"joni"} messageCount={10} isLoggedId={false} />
      <Person name={PersonName} />
      <PersonList names={names} />
      <Status status="loading" />
      <Status status="success" />
      <Status status="error" />
      <Heading>Passing some text between the Heading tags!</Heading>
    </div>
  );
}

export default App;
