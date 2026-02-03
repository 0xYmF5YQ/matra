import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostMaterial from "./pages/PostMaterial.jsx";
import Marketplace from './pages/Marketplace';
import Enterprise from './pages/Enterprise';
import ImpactTracker from './pages/ImpactTracker';
import MaterialDetail from './pages/MaterialDetail';
export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PostMaterial />} />
        <Route path="/materials" element={<Marketplace />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/impact" element={<ImpactTracker />} />
        <Route path="/material/:id" element={<MaterialDetail />} />
      </Routes>
      
    </>
  );
}
