import { Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
// import { AboutPage } from "./pages/AboutPage";
// import { ProjectPage } from "./pages/ProjectPage";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/project" element={<ProjectPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
