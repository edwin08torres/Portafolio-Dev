import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[1%] left-5 bg-blue-600 text-white py-1 px-2 md:p-2 rounded-full shadow-lg hover:bg-blue-900 transition-all z-50 transform hover:-translate-y-1 focus-visible:outline-2 fade-in-25"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
};