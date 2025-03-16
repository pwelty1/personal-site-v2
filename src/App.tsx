import LavaLamp from "./components/Lavalamp";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <NavBar currentPage={{ pathname: window.location.pathname }} />
      <LavaLamp />
      <Routes>
        <Route path="/">
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
