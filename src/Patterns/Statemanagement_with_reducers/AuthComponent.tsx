import React, { useState, useReducer } from "react";

// Initial state for the reducer
const initState = {
  loggedIn: false,
  user: null,
  token: null,
};

// Reducer function to handle login and logout actions
function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "logout":
      return initState;
    default:
      return state;
  }
}

const AuthComponent = () => {
  const [state, dispatch] = useReducer(authReducer, initState);
  const [username, setUsername] = useState(""); // Track username
  const [password, setPassword] = useState(""); // Track password

  const login = (e) => {
    e.preventDefault(); // Prevents form submission refresh
    console.log("Username:", username); // Log username
    console.log("Password:", password); // Log password

    // Dispatch login action
    dispatch({
      type: "login",
      payload: {
        user: username,
        token: "abc123",
      },
    });

    // Clear form fields
    setUsername("");
    setPassword("");
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      {state.loggedIn ? (
        <div>
          <p>Welcome, {state.user}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={login}>
          <h1>Enter your Credentials for login</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default AuthComponent;
