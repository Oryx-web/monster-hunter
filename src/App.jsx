import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monsters from "./pages/Monsters";
import Weapons from "./pages/Weapons";
import Armors from "./pages/Armors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/monster-hunter" element={<Home />} />
        <Route path="/monster-hunter/monsters" element={<Monsters />} />
        <Route path="/monster-hunter/weapons" element={<Weapons />} />
        <Route path="/monster-hunter/armors" element={<Armors />} />
      </Routes>
    </Router>
  );
}

export default App;