import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";

function App() {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };

  return (
    <div className="App">
      <Greet name={"joni"} messageCount={10} isLoggedId={false} />
      <Person name={PersonName} />
    </div>
  );
}

export default App;
