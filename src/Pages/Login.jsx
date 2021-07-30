import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleIsAuth } = useContext(AuthContext);
  const hs = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    handleIsAuth(true);
    hs.goBack();
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onClick={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onClick={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
