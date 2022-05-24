import Navbar from "./Navbar";
import Home from "./Home";
import Anslagstavla from "./Anslagstavla"
import About from "./About"
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

      </Routes>
    </div>
    </>
  ) 
}

export default App;
