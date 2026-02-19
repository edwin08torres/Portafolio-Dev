import { Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/layout/Footer";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
