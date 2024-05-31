import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/Home" element={<Home></Home>}/>
        <Route path="/About" element={<About></About>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
      </Routes>
    </>
  );
}

export default App
