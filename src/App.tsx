import LavaLamp from "./components/Lavalamp";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

function App() {
  const defaultPrimaryColor =
    window.localStorage.getItem("primaryColor") ??
    getComputedStyle(document.documentElement).getPropertyValue(
      "--primary-color"
    );

  const theme = {
    cssVariables: true,
    palette: {
      mode: "dark" as const,
      primary: {
        main: defaultPrimaryColor,
      },
      secondary: {
        main: defaultPrimaryColor,
      },
      background: {
        default: "#212121",
        paper: "#212121",
      },
      text: {
        primary: defaultPrimaryColor,
      },
    },
  };

  return (
    <>
      <ThemeProvider theme={createTheme(theme)}>
        <NavBar currentPage={{ pathname: window.location.pathname }} />
        <LavaLamp />
        <Routes>
          <Route path="/">
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
