import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";

import { ThemeOptions } from "@mui/material/styles";
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#1de9b6",
    },
    secondary: {
      main: "#1de9b6",
    },
    background: {
      default: "#212121",
      paper: "#212121",
    },
    text: {
      primary: "#1de9b6",
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={createTheme(themeOptions)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
