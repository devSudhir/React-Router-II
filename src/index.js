import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthContextProvider>
  </BrowserRouter>,
  rootElement
);
