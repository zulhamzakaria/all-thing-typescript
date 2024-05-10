import { UserContext } from "./UserContext";
import { useContext } from "react";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "jonny",
        email: "jonni@example.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext?.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext?.user ? (
        <p>
          User {userContext?.user?.name} can be reached at:{" "}
          {userContext?.user?.email}
        </p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};
