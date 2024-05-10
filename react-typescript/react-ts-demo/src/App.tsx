import "./App.css";
import { Button } from "./components/Button";
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
      <Button
        handleClick={() => {
          alert("button clicked");
        }}
        handleClickWithEvent={(e) => {
          alert(e.currentTarget);
        }}
      />
    </div>
  );
}

export default App;
