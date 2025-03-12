import LavaLamp from "./components/Lavalamp/Lavalamp";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#1de9b6",
      contrastText: "#fafa",
    },
  },
});

function App() {
  return (
    <>
      <NavBar currentPage={{ pathname: window.location.pathname }} />
      <LavaLamp />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
