import "./style/index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/webpage/home";
import  Apply  from "./pages/webpage/apply";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route  path="/apply" element={<Apply />} />
      </Routes>
      </>
    
  );
}

export default App;
