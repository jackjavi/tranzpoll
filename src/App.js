import Survey4 from "./pages/Survey4";
import Survey3 from "./pages/Survey3";
import Survey2 from "./pages/Survey2";
import Survey from "./pages/Survey";
import Survey0 from "./pages/Survey0";
import Facecook from "./pages/Facecook";
import Submission from "./pages/Submission";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Instagram from "./pages/Instagram";
import Twitter from "./pages/Twitter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/survey0" element={<Survey0 />} />
          <Route path="/survey1" element={<Survey />} />
          <Route path="/survey2" element={<Survey2 />} />
          <Route path="/survey3" element={<Survey3 />} />
          <Route path="/survey4" element={<Survey4 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/facecook" element={<Facecook />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
