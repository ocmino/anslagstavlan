import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anslagstavla from "./pages/Anslagstavla"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  


  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anslagstavla" element={<Anslagstavla />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  ) 
}

export default App;
