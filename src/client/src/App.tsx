import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import "./App.css";
import Films from "./components/Films/Films";
import Cinematography from "./components/Cinematography/Cinematography";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import './components/MobileMaster.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/Cinematography" element={<Cinematography />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
