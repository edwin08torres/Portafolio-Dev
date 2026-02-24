import { Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/common/CustomCursor";
import { ChatWidget } from "./components/common/ChatWidget";

export function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </>
  );
}
