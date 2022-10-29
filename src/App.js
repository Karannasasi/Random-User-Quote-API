import Inline from "./component/Inline";
import Navbar from "./component/Navbar";
import Gadget from "./component/Gadget";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Features/Home";
import Features from "./component/pages/Features/Features";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/Features" element={<Features />} />
        <Route path="/AddUser" element={<Inline />} />
        <Route path="/AddQuote" element={<Gadget />} />
      </Routes>
    </Router>
  );
}

export default App;
