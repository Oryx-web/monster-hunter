import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monsters from "./pages/Monsters";
import Weapons from "./pages/Weapons";
import Armors from "./pages/Armors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/monster-hunter" element={<Home />} />
        <Route path="/monsters" element={<Monsters />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/armors" element={<Armors />} />
      </Routes>
    </Router>
  );
}

export default App;