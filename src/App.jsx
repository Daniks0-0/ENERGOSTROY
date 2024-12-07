import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className="app">
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />} /> {/* Главная страница */}
          <Route path="projects" element={<Projects />} /> {/* Проекты */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
