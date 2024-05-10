import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </div>
  );
}

export default App;
