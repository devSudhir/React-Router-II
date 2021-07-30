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
    <div style={{ margin: "20px auto" }}>
      <form onSubmit={handleLogin}>
        <input
          style={{
            border: "none",
            borderBottom: "2px solid #333",
            padding: "10px",
            fontSize: "1rem"
          }}
          type="email"
          placeholder="Email"
          name="email"
          onClick={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          style={{
            border: "none",
            borderBottom: "2px solid #333",
            padding: "10px",
            fontSize: "1rem",
            marginTop: "7px"
          }}
          type="password"
          placeholder="password"
          name="password"
          onClick={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button
          style={{
            border: "none",
            borderBottom: "2px solid #333",
            padding: "10px",
            fontSize: "1rem",
            marginTop: "7px",
            borderRadius: "7px"
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
