import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./contexts/theme";
import StoreWrapper from "./store";
import QueryWrapper from "./query-client/QueryWrapper";

ReactDOM.render(
  <React.StrictMode>
    <QueryWrapper>
      <StoreWrapper>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreWrapper>
    </QueryWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
