import { useState } from "react";
import { registerUser } from "../api";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error signing up. Try again.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
