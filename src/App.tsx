import { Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    // `overflow-x-clip` (no `hidden`) evita el scroll lateral de las cintas inclinadas sin romper `position: sticky`
    <div className="overflow-x-clip">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
