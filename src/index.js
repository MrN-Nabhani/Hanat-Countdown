import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Themes from "./themes/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/GlobalStyles";

ReactDOM.render(
  <ThemeProvider theme={Themes}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
