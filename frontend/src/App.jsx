import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Materials from "./pages/Materials.jsx";
import AddMaterial from "./pages/AddMaterial.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/add" element={<AddMaterial />} />
      </Routes>
      <Footer />
    </>
  );
}
