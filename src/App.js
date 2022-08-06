import Survey4 from "./pages/Survey4";
import Survey3 from "./pages/Survey3";
import Survey2 from "./pages/Survey2";
import Survey from "./pages/Survey";
import Facecook from "./pages/Facecook";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/survey1" element={<Survey />} />
          <Route path="/survey2" element={<Survey2 />} />
          <Route path="/survey3" element={<Survey3 />} />
          <Route path="/survey4" element={<Survey4 />} />
          <Route path="/facecook" element={<Facecook />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
