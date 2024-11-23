import  Home from "./pages/Home";
import Projects from "./pages/Projects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Routes, Route } from "react-router";

function App() {


  return (
    <div className="app">
    
 
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </main>

  </div>
  );
}

export default App;
