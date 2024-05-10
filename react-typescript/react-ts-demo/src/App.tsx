import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Containter";
import { Box } from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
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
      <List items={["Hal", "John", "Brut"]} onClick={(item) => alert(item)} />

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <Counter />
      <Container
        styles={{
          border: "1px solid black",
          padding: "10px 5px",
          background: "lime",
        }}
      />
      {""}
      <LoggedIn />
      {""}
      {/* <User /> */}
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
      <Input value="" handleChange={(e) => alert(e.type)} />
    </div>
  );
}

export default App;
