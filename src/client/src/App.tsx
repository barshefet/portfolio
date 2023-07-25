import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import './App.css'
import Portfolio from "./components/Portfolio/Portfolio";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App
