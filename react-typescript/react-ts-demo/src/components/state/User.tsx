import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [user1, setUser1] = useState<AuthUser>({ name: "", email: "" });
  const [user2, setUser2] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Jonni",
      email: "example@mail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
    setUser2({} as AuthUser);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user && (
        <div>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </div>
      )}
    </div>
  );
};
