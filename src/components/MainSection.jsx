import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityTabs from "./CityTabs";

function MainSection() {
  return (
    <BrowserRouter>
      <div>
        <CityTabs />
        <Routes>
          <Route path="/home" element={<div></div>} />
          <Route path="/Milano" element={<div></div>} />
          <Route path="/Torino" element={<div></div>} />
          <Route path="/Bari" element={<div></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainSection;
