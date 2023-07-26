import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import './App.css'
import Films from "./components/Films/Films";
import Photography from "./components/Photography/Photography";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/films" element={<Films/>}/>
        <Route path="/photo" element={<Photography />}/>
        <Route path="/about"/>
        <Route path="/contact"/>
      </Routes>
    </>
  )
}

export default App
